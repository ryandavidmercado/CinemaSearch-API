const db = require("../db/connection");

const list = () =>
  db("theaters as t")
    .select(
      "t.*",
      "m.movie_id as movies.movie_id",
      "m.title as movies.title",
      "m.runtime_in_minutes as movies.runtime_in_minutes",
      "m.rating as movies.rating",
      "m.description as movies.description",
      "m.image_url as movies.image_url",
      "m.created_at as movies.created_at",
      "m.updated_at as movies.updated_at",
      "mt.theater_id as movies.theater_id",
      "mt.is_showing as movies.is_showing"
    )
    .join("movies_theaters as mt", "t.theater_id", "mt.theater_id")
    .join("movies as m", "mt.movie_id", "m.movie_id");

module.exports = { list };
