const app = require("express");
const { createOrder } = require("../controllers/payment");

const paymentRouter = app.Router();

paymentRouter.post("/", createOrder);

module.exports = paymentRouter;
