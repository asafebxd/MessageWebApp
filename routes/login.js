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
      if (users.length !== 1) {
        res.send({ message: "User not found" });
      } else {
        bcrypt.compare(password, users[0].password, function(err,result) {
          if (result) {
            req.session.userId = users[0].id;
            req.session.userName = users[0].name;
            req.session.room = null;
            res.send({message: "saves"}).status(201);
          } else {
            console.log("nao logou");
          }
        });
      }

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
