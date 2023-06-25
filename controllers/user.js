const expressAsyncHandler = require("express-async-handler");
const userAuth = require("../models/userAuth");
const bcrypt = require("bcrypt");
const userDetails = require("../models/userDetails");

// $2b$10$BPQK4f9eLCkGEqszZh14Aui/zRElmfbb1c0Sin6F4SHcbITtbYbZG
const addUserAddress = expressAsyncHandler(async (req, res) => {
  const { address, state, mobile, userId, pincode } = req.body;
  if(!address || !state || !mobile || !userId || !pincode){
    res.status(400).json({ message: "all field are mandatory!" });
  }
  const addAdress = await userDetails.create({
    address, state, mobile, userId, pincode
  })
  if(addAdress){
    res.status(200).json({message:"user address uppdated"})
  }else{
    res.status(400).json({message:"something went wrong!"})
  }
});

const addUser = expressAsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400).json({ message: "all field are mandatory!" });
  }
  const checkIfUserAvailable = await userAuth.find({ email: email });
  if (checkIfUserAvailable.length) {
    res
      .status(400)
      .json({ message: "user with this email id already exists." });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const userId = await bcrypt.hash(email, 10);

  const addNewUser = await userAuth.create({
    name,
    email,
    password: hashedPassword,
    userId,
  });

  if (addNewUser) {
    res.status(201).json({ message: `user added`, userId });
  } else {
    res.status(400).json({ message: "something went wrong" });
  }
});

const userLogin = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const checkForEmail = await userAuth.findOne({ email });
  if (checkForEmail && (await bcrypt.compare(password, checkForEmail.password))) {
    res.status(200).json({message:"login success",userId:checkForEmail.userId})
  } else {
    res.status(400).json({ message: `no user is available with ${email}` });
  }
});

module.exports = { addUserAddress, addUser,userLogin };
