const { Data } = require("../model/Data");
const getAllData = async () => {
  try {
    const data = await Data.find();
    return data;
  } catch (error) {
    return Promise.reject(err);
  }
};

const getOneData = async (id) => {
  try {
    const data = await Data.findById(id);
    if (!data) return;
    return data;
  } catch (error) {
    return Promise.reject(err);
  }
  //   return;
};

const saveData = async (data) => {
  try {
    let { username, email } = data;
    const user = new Data({
      username,
      email
    });
    await user.save();
    return user;
  } catch (err) {
    return Promise.reject(err);
  }
};

const updateOneData = async (user) => {
  try {
    await user.save();
    return user;
  } catch (err) {
    return Promise.reject(err);
  }
};

// const deleteOneData = () => {
//   return;
// };

module.exports = {
  getAllData,
  getOneData,
  saveData,
  updateOneData,
  // deleteOneData,
};
