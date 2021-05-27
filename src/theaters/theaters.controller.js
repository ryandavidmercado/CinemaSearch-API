const service = require("./theaters.service");
const ash = require("../errors/asyncErrorHandler");
const {
  reduceProperties,
  generateConfigFromPrefix,
} = require("../utils/reduce-properties");

//utility functions
const reduceTheaters = (theaters) => {
  const config = generateConfigFromPrefix(theaters[0], "movies");
  const theatersReducer = reduceProperties("theater_id", config);
  return theatersReducer(theaters);
};
//

//route handlers
const list = async (req, res, next) => {
  const rawData = await service.list();
  res.json({ data: reduceTheaters(rawData) });
};
//

module.exports = {
  list: ash(list),
};
