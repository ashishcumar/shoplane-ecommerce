const mongoose = require("mongoose");
const userDetails = mongoose.Schema(
  {
    userId: {
      type: String,
      required: [true, "Please add productId"],
    },
    address: {
      type: String,
      require: [true, "Please add numOfProducts"],
    },
    pincode: {
      type: String,
      required: [true, "Please add userId"],
    },
    state: {
      type: String,
      required: [true, "Please add userId"],
    },
    mobile: {
      type: String,
      required: [true, "Please add userId"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user_Details", userDetails);
