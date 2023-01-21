const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  mobile:Number,
  password:{
    type:String,
    required:true
  },
  date:{
    type:Date,
    default:Date.now
}
  });

  let user = new mongoose.model("user",userSchema);
  module.exports = user;