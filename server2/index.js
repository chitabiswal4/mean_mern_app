const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");
var router = express.Router();
const data = require("./routes/data_route.js");
app.use(express.json());
const client = new MongoClient("mongodb://localhost:27017/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
var database;
client
  .connect()
  .then(() => console.log("Connected Successfully"))
  .catch((error) => console.log("Failed to connect", error));

var database = client.db("TESTDB");
let PORT = "9000";

var dataRouter = data.setRouter(router);
app.listen(PORT, () => {
  // Connect to database
  data.setDb(database);
  app.use("/data", dataRouter);
  console.log("server is listening at" + PORT);
});
