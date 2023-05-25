const express = require("express");
const router = express.Router();
const restaurantController = require("../../controllers/restaurant");
const controllerWrapper = require("../../helpers/controllerWrapper");
const { restaurantShema } = require("../../models/restaurant");
const { validateBody } = require("../../middlewares");
const { restaurantMenuShema } = require("../../models/menu");

router.post(
  "/",
  validateBody(restaurantShema),
  controllerWrapper(restaurantController.addRestaurant)
);

router.post(
  "/menu",
  validateBody(restaurantMenuShema),
  controllerWrapper(restaurantController.addRestaurantMenu)
);

router.get("/all", controllerWrapper(restaurantController.allRestaurant));
router.get(
  "/allmenu/:name",
  controllerWrapper(restaurantController.allRestaurantMenu)
);

module.exports = router;
