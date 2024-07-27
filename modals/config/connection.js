require("dotenv").config();
const development = {
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  dialect: process.env.DIALECT,
};
let db;
switch (process.env.NODE_ENV) {
  case "staging":
    db = development;
    break;
  default:
    db = development
    break;
}
module.exports = { db };