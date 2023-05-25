const { Menu } = require("../../models/menu");

const allRestaurantMenu = async (req, res) => {
  const { name } = req.params;
  const result = await Menu.find({ restaurant: name });
  res.json(result);
};

module.exports = allRestaurantMenu;
