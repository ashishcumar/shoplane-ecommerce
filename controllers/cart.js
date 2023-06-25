// const expressAsyncHandler = require("express-async-handler");
// const cartSchema = require("../models/cart");

// const updateCart = expressAsyncHandler(async (req, res) => {
//   const { productId, userId, count } = req.body;
//   if (!productId || !userId || !`${count}`) {
//     return res.status(400).json("All fields are mandatory !");
//   }

//   const checkForUserCart = await cartSchema.findOneAndUpdate({
//     $and: [{ userId }, { productId }]},
//     {productId,userId,count:Number(checkForUserCart.count) > count
//     },
//     { new: true }
//   );
//   console.log(checkForUserCart);
//   if (!checkForUserCart) {
//     const addToCart = await cartSchema.create({
//       productId, userId, count
//     })
//     if(res){
//      res.status(201).json({message:"cart updated"})
//     }
//   } else {
    
//     res.status(200).json(checkForUserCart);
//   }
// });

// const cartDetailByUserId = expressAsyncHandler(async (req, res) => {
//   // const userId = req.params.userId;
//   // const cartRes = await sequelizeDbConnection.query(`
//   //   select * from carts where userId='${userId}';
//   //   `);
//   // if (cartRes) {
//   //   res.status(200).json(cartRes);
//   // }
// });

// module.exports = { updateCart, cartDetailByUserId };
