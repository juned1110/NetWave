const errorMiddleware = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "BACKEND ERROR";
  const extraDetailes = err.extraDetailes || "Error from backend";

  return res.status(status).json({ message, extraDetailes });
};

module.exports = errorMiddleware;
