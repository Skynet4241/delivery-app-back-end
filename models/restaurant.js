const { Schema, model } = require("mongoose");
const Joi = require("joi");

const shema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for restaurant"],
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
    },
    rating: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

const Restaurant = model("restaurant", shema);

const restaurantShema = Joi.object({
  name: Joi.string().required().error(new Error("Set name for restaurant")),
  address: Joi.string(),
  phone: Joi.string(),
  rating: Joi.string(),
  image: Joi.string(),
});

module.exports = { Restaurant, restaurantShema };
