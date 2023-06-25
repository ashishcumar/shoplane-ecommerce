const dotenv = require("dotenv").config();
const express = require("express");
const userRouter = require("./routes/user");
// const cartRouter = require("./routes/cart");
const productRouter = require("./routes/product");
const paymentRouter = require("./routes/payment");
const app = express();
var cors = require("cors");
const connectDb = require("./db_config/mongoDbConnection");

connectDb()
app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/product", productRouter);
// app.use("/cart", cartRouter);
app.use("/payment", paymentRouter);

app.listen(process.env.PORT, () => {
  console.log("index.js server is running now");
});
