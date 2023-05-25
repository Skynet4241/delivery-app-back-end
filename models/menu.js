const { Schema, model } = require("mongoose");
const Joi = require("joi");

const shema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for restaurant"],
    },
    price: {
      type: String,
    },
    image: {
      type: String,
    },
    restaurant: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

const Menu = model("menu", shema);

const restaurantMenuShema = Joi.object({
  name: Joi.string().required().error(new Error("Set name for food")),
  price: Joi.string(),
  image: Joi.string(),
  restaurant: Joi.string(),
});

module.exports = { Menu, restaurantMenuShema };
