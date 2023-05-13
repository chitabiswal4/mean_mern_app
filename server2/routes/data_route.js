const mongodb = require("mongodb");
var collection = "";

const setDb = (db) => {
  collection = db.collection("data");
};
const setRouter = (router) => {
  router.route("/add").post(async (req, res) => {
    try {
      const { username, email } = req.body;
      if (!username || !email)
        return res
          .status(400)
          .json({ message: "username and email are required" });

      await collection.insertOne({ username, email });
      res.status(200).send({
        status: "success",
        data: "user inserted successfully!",
      });
    } catch (error) {
      res
        .status(500)
        .send({ status: "failed", message: "Internal server error!" });
    }
  });
  router.route("/get").get(async (req, res) => {
    let allData = await collection.find({}).toArray();
    if (allData) {
      res.status(200).send(allData);
    } else {
      res
        .status(500)
        .send({ status: "failed", message: "Failed to retrieve data!" });
    }
  });
  router.route("/delete").delete((req, res) => {});
  router.route("/update").put(async (req, res) => {});
  return router;
};

exports.setRouter = setRouter;
exports.setDb = setDb;
