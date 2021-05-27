const service = require("./movies.service");
const ash = require("../errors/asyncErrorHandler");
const prefixedPropertyMap = require("../utils/prefixed-property-map");

//validation middleware
const movieExists = async (req, res, next) => {
  const data = await service.read(req.params.movieId);
  if (!data) {
    return next({ status: 404, message: "Movie cannot be found." });
  }
  res.locals.movie = data;
  next();
};
//

//route handlers
const list = async (req, res, next) => {
  const { is_showing } = req.query;
  const data =
    is_showing === "true" ? await service.listShowing() : await service.list();
  res.json({ data });
};

const read = (req, res, next) => {
  res.json({ data: res.locals.movie });
};

const readTheaters = async (req, res, next) => {
  res.json({ data: await service.readTheaters(req.params.movieId) });
};

const readReviews = async (req, res, next) => {
  const data = await service.readReviews(req.params.movieId);
  res.json({ data: prefixedPropertyMap(data, "critic") });
};
//

module.exports = {
  list: ash(list),
  read: [ash(movieExists), read],
  readTheaters: [ash(movieExists), ash(readTheaters)],
  readReviews: [ash(movieExists), ash(readReviews)],
};
