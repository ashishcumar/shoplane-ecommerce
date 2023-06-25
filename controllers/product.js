const expressAsyncHandler = require("express-async-handler");
const product = require("../models/product");

const getSingleProduct = expressAsyncHandler(async (req, res) => {
  const productId = req.params.productId;
  const resProduct = await product.find({id:productId})
  if(resProduct.length){
    res.status(200).json(resProduct)
  }else{
    res.status(400).json({message:`product with id-${productId} is not available`})
  }
});

const getAllProducts = expressAsyncHandler(async (req, res) => {
   const resProduct = await product.find()
   if(resProduct.length){
    res.status(200).json(resProduct)
   }else{
    res.status(400).json({message:"no product available"})
   }
});

const addProduct = expressAsyncHandler(async(req,res) => {
  const {id, name, preview, numOfProducts, isAccessory, brand, price, description, pics } = req.body;
  if(!id || !name || !preview || !numOfProducts || !brand || !price || !description || !pics){
    res.status(400).json({message:"All fields are mandatory !"});
  }
  const newProduct = await product.create({
    id, name, preview, numOfProducts, isAccessory, brand, price, description, pics
  })
  res.status(201).json({ data:newProduct,message:"product Added"});
})

module.exports = { addProduct,getAllProducts, getSingleProduct };
