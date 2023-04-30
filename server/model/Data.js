const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt fields
  }
);
const Data = mongoose.model("Data", DataSchema);

module.exports = { Data };
