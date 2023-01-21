const mongoose = require('mongoose')

const notesSchema = new Schema({
    title:{
      type:String,
      required:true
    },
    description:{
      type:String,
      required:true,
    },
    tag:{
      type:String
    },
    date:{
        type:Date,
        default:Date.now
    }
    });

    let note = new mongoose.model("note",userSchema);
    module.exports = note;