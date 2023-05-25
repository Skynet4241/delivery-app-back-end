const { Restaurant } = require("../../models/restaurant");

const addRestaurant = async (req, res) => {
  const result = await Restaurant.create({ ...req.body });

  res.status(201).json({ result });
};

module.exports = addRestaurant;
