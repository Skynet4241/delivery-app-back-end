const { Restaurant } = require("../../models/restaurant");

const allRestaurant = async (req, res) => {
  const result = await Restaurant.find();
  res.json(result);
};

module.exports = allRestaurant;
