const mongoose = require("mongoose");
const product = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please add name"],
    },
    id: {
      type: String,
      require: [true, "Please add id"],
    },
    preview: {
      type: String,
      required: [true, "Please add preview"],
    },
    numOfProducts: {
      type: Number,
      required: [true, "Please add numOfProducts"],
    },
    isAccessory: {
      type: Boolean,
      required: [true, "Please add isAccessory"],
    },
    brand: {
      type: String,
      required: [true, "Please add brand"],
    },
    price: {
      type: Number,
      required: [true, "Please add price"],
    },
    description: {
      type: String,
      required: [true, "Please add description"],
    },
    pics: {
      type:[{type: String}],
      required: [true, "Please add pics"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("product", product);
