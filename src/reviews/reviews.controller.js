const service = require("./reviews.service");
const ash = require("../errors/asyncErrorHandler");
const {
  hasDataProp,
  noInvalidFields,
} = require("../utils/validation-generator");

//validation middleware
const reviewExists = async (req, res, next) => {
  const count = await service.readCount(req.params.reviewId);
  return count
    ? next()
    : next({ status: 404, message: "Review cannot be found." });
};
const validateReviewFields = noInvalidFields(["content", "score"]);
//

//utility functions
const embedCritic = async (review) => {
  const criticInfo = await service.readCritic(review.critic_id);
  const output = { ...review };

  output.critic = {};
  for (let key in criticInfo) {
    output.critic[key] = criticInfo[key];
  }

  return output;
};
//

//route handlers
const destroy = async (req, res, next) => {
  await service.delete(req.params.reviewId);
  res.sendStatus(204);
};

const update = async (req, res, next) => {
  await service.update(req.body.data, req.params.reviewId);
  const newReview = await service.read(req.params.reviewId);

  res.json({ data: await embedCritic(newReview) });
};
//

module.exports = {
  delete: [ash(reviewExists), ash(destroy)],
  update: [ash(reviewExists), hasDataProp, validateReviewFields, ash(update)],
};
