const service = require("../services/basicService");
const { Data } = require("../model/Data");
const getData = async (req, res) => {
  let allData = await service.getAllData();
  //   res.send(allData);
  if (allData) {
    res.status(200).send(allData);
  } else {
    res
      .status(500)
      .send({ status: "failed", message: "Failed to retrieve data!" });
  }
};
const getOneData = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).send({ status: "failed", message: "Invalid data id!" });
  }
  let oneData = await service.getOneData(id);
  if (oneData) {
    res.status(200).send(oneData);
  } else {
    res
      .status(400)
      .send({ status: "failed", message: "Failed to retrieve data!" });
  }
};
const createData = async (req, res) => {
  try {
    const { username, email } = req.body;
    if (!username || !email)
      return res
        .status(400)
        .json({ message: "username and email are required" });

    await service.saveData({ username, email });
    res.status(200).send({
      status: "success",
      data: "user inserted successfully!",
    });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).send({
        status: "failed",
        message: "Duplicate data!",
      });
    } else {
      res
        .status(500)
        .send({ status: "failed", message: "Internal server error!" });
    }
  }


};
const updateData = async (req, res) => {
  const { username, email } = req.body;
  const userId = req.query.id;
  if (!username || !email) {
    return res
      .status(400)
      .json({ status: "failed", message: "username and email are required" });
  }
  try {
    const user = await Data.findById(userId);
    if (!user) {
      res
        .status(400)
        .json({ status: "failed", message: "invalid id!" });
    } else {
      user.username = username;
      user.email = email;
      await service.updateOneData(user);
      res.status(200).json({
        status: "success",
        data: "user updated successfully!",
      });
    }

  } catch (err) {
    res.status(500).json({ status: "failed", message: err.message });
  }
};
const deleteData = async (req, res) => {
  const { id } = req.query;
  try {
    const deletedData = await Data.findByIdAndDelete(id);
    if (!deletedData) {
      return res.status(404).send({
        status: "failed",
        data: "Data not found!"
      });
    }
    res.status(200).send({
      status: "sucess",
      data: "data deleted successfully!"
    })
  } catch (err) {
    console.log(err);
    res.status(500).send({
      status: "failed",
      data: err.message
    });
  }
};
module.exports = {
  getData,
  getOneData,
  createData,
  updateData,
  deleteData,
};
