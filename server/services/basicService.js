const { Data } = require("../model/Data");
const getAllData = async () => {
  try {
    const data = await Data.find();
    return data;
  } catch (error) {
    return;
  }
};

const getOneData = async (id) => {
  try {
    const data = await Data.findById(id);
    if (!data) return;
    return data;
  } catch (error) {
    return;
  }
  //   return;
};

const saveData = async (data) => {
  try {
    // Create a new user object
    let { username, email } = data;
    const user = new Data({
      username,
      email
    });
    // Save the user to the database
    await user.save();
    return user; // Send the saved user as the response
  } catch (err) {
    return err;
  }
};

const updateOneData = () => {
  return;
};

const deleteOneData = () => {
  return;
};

module.exports = {
  getAllData,
  getOneData,
  saveData,
  updateOneData,
  deleteOneData,
};
