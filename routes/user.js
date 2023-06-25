const app = require("express");
const {addUserAddress,addUser,userLogin} = require("../controllers/user");
const userRouter = app.Router();


userRouter.post("/add-address", addUserAddress);
userRouter.post('/add-user',addUser)
userRouter.post('/login',userLogin)

module.exports = userRouter;
