const app = require("express");
const { getSingleProduct, getAllProducts, addProduct } = require("../controllers/product");
const productRouter = app.Router();

productRouter.get("/:productId", getSingleProduct);
productRouter.get("/", getAllProducts);
productRouter.post('/',addProduct)

module.exports = productRouter;
