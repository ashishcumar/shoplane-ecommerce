const mongoose = require('mongoose');
const paymentSchema = mongoose.Schema({
  paymentId:{
      type:String,
      required:[true,"Please add paymentId"]
  },
  productId:{
      type:String,
      require:[true, "Please add productId"],
  },
  amount : {
      type:String,
      required:[true,"Please add amount"]
  },
  status : {
    type:String,
    required:[true,"Please add status"]
}
},{
  timestamps:true
})

module.exports = mongoose.model('payment_Schema',paymentSchema);