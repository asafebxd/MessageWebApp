const bcrypt = require("bcrypt");
const { Pool } = require("pg");
require("dotenv").config();

const dbCredentials = {
  user: process.env.DB_NAME,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
};

const loginUser = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  let matchPass = false;

  const pool = new Pool(dbCredentials);
  pool
    .query("SELECT * FROM users WHERE email = $1", [email])
    .then((res) => res.rows)
    .then((users) => {
      if (res.rows === 0) {
        console.log("users", users);
        res.send({ message: "User not found" });
      } else {
        console.log("passwords", password, users[0].password);
        matchPass = bcrypt.compare(password, users[0].password);
      }
      console.log("users", users);
      console.log("teste", matchPass);
    })
    .catch((err) => {
      if (err) {
        console.log("err", err);
        res.send({ message: "Username not found" });
      }
    })
    .finally(() => {
      pool.end();
    });
};

const logoutUser = (req, res) => {
  res.clearCookie(email);
  (req.session = null), res.redirect("/login");
};

module.exports = { loginUser, logoutUser };
