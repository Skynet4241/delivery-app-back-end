const { Menu } = require("../../models/menu");

const addRestaurantMenu = async (req, res) => {
  const result = await Menu.create({ ...req.body });

  res.status(201).json({ result });
};

module.exports = addRestaurantMenu;
