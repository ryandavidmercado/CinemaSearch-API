const notFound = (req, res, next) => {
  next({
    status: 404,
    message: `Route ${req.originalUrl} not found.`,
  });
};

module.exports = notFound;
