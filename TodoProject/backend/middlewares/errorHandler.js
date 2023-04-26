exports.errorHandler = (res, errorMessage, code) => {
  res.status(code).json({ success: false, message: errorMessage });
};
