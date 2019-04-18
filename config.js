module.exports = {
  ENV: process.env.NODE_ENV || "development",
  PORT: process.env.PORT || 3000,
  //URL: process.env.BASE_URL || `http://localhost:${PORT}`,
  MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost/dbContext",
  JWT_SECRET: process.env.JWT_SECRET || "secret"
};
