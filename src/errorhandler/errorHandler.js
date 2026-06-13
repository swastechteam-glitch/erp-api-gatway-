export const handleError = (error, req, res, next) => {
  res.status(502).json({ code: 502, message: [error.message], data: {} });
};
