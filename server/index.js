const express = require("express");
const V1Router = require("./v1/routes/basicRoutes");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello world");
});
app.use(express.json())
mongoose.connect("mongodb://localhost:27017/crudDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use("/api/v1", V1Router);
app.listen(PORT, () => {
  console.log("API is listening to port " + PORT);
});
