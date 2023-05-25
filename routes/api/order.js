const express = require("express");
const { validateBody } = require("../../middlewares");
const controllerWrapper = require("../../helpers/controllerWrapper");
const { orderShema } = require("../../models/order");
const restaurantController = require("../../controllers/restaurant");
const router = express.Router();

router.post(
  "/order",
  validateBody(orderShema),
  controllerWrapper(restaurantController.addOrder)
);

module.exports = router;
