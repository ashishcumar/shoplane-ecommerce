const Razorpay = require("razorpay");
const dotenv = require("dotenv").config();

const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const createOrder = async (req, res) => {
  try {
    const {amount , productName} = req.body;
    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: "kumarashish87998@gmail.com",
    };

    razorpayInstance.orders.create(options, (err, order) => {
      if (!err) {
        res.status(200).send({
          success: true,
          msg: "Order Created",
          order_id: order.id,
          amount: amount,
          key_id: process.env.RAZORPAY_KEY_ID,
          product_name: productName.split(',')[0] || productName,
          description: productName,
          contact: "9540303720",
          name: "Ashish",
          email: "kumarashish87998@gmail.com",
        });
      } else {
        console.log(err)
        res.status(400).send({ success: false, msg: "Something went wrong!",err });
      }
      
    });
  } catch (error) {
    console.log(error.message);
  }
};

// const updatePayment = async () => {};

module.exports = { createOrder };
