const db = require("../db/connection");
const table = "reviews as r";

const destroy = (review_id) => db(table).where({ review_id }).del();

const update = (review, review_id) =>
  db(table)
    .where({ review_id })
    .update({ ...review, updated_at: db.fn.now() });

const read = (review_id) => db(table).first("*").where({ review_id });

const readCritic = (critic_id) => db("critics").where({ critic_id }).first();

const readCount = (review_id) =>
  db(table)
    .count("review_id as count")
    .where({ review_id })
    .then((res) => Number(res[0].count));

module.exports = {
  delete: destroy,
  update,
  read,
  readCritic,
  readCount,
};
