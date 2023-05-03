const express = require("express");
const router = express.Router();
const controller = require("../controllers/basicController");
router.get("/", controller.getData);
router.get("/:id", controller.getOneData);
router.post("/", controller.createData);
router.delete("/", controller.deleteData);
router.patch("/", controller.updateData);

module.exports = router;
