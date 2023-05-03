const express = require("express");
const Router = require("./routes/basicRoutes");
const app = express();
const cors = require("cors")
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello world");
});
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb://localhost:27017/crudDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use("/api/v1", Router);
app.listen(PORT, () => {
  console.log("API is listening to port " + PORT);
});
