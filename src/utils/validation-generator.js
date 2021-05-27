const hasDataProp = (req, res, next) =>
  !req.body.hasOwnProperty("data")
    ? next({
        status: 400,
        message: `Request body must include 'data' property.`,
      })
    : next();

const noInvalidFields = (validFields) => (req, res, next) => {
  const strikes = [];
  for (let key in req.body.data) {
    if (!validFields.includes(key)) strikes.push(key);
  }
  return strikes.length
    ? next({
        status: 400,
        message: `Request data contains invalid fields: ${strikes.join(", ")}`,
      })
    : next();
};

module.exports = { hasDataProp, noInvalidFields };
