const db = require("../db/connection");
const table = "movies as m";

const list = () => db(table).select("*");

const listShowing = () =>
  db(table)
    .join("movies_theaters as mt", "m.movie_id", "mt.movie_id")
    .distinct("m.*")
    .where("mt.is_showing", true);

const read = (movie_id) => db(table).select("*").where({ movie_id }).first();

const readTheaters = (movie_id) =>
  db(table)
    .join("movies_theaters as mt", "m.movie_id", "mt.movie_id")
    .join("theaters as t", "mt.theater_id", "t.theater_id")
    .distinct("t.*")
    .select("m.movie_id", "mt.is_showing")
    .where({
      "mt.is_showing": true,
      "m.movie_id": movie_id,
    });

const readReviews = (movie_id) =>
  db("reviews as r")
    .select(
      "r.*",
      "c.critic_id as critic.critic_id",
      "c.preferred_name as critic.preferred_name",
      "c.surname as critic.surname",
      "c.organization_name as critic.organization_name",
      "c.created_at as critic.created_at",
      "c.updated_at as critic.updated_at"
    )
    .join("critics as c", "r.critic_id", "c.critic_id")
    .where({ movie_id });

module.exports = { list, listShowing, read, readTheaters, readReviews };
