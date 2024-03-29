const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const knex = require("knex");

const db = knex({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "dev",
    password: "bombay3333",
    database: "smartbrain"
  }
});

db.select("*")
  .from("users")
  .then(data => {
    console.log(data);
  });

app.use(bodyParser.json());
app.use(cors());

const database = {
  users: [
    {
      id: "123",
      name: "john",
      email: "john@gmail.com",
      password: "john123"
    }
  ]
};
app.get("/", (req, res) => {
  res.send("this is working");
});

app.post("/signin", (req, res) => {});

app.listen(3001, () => {
  console.log("app is running on port 3000");
});
