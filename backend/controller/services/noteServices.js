const { default: userEvent } = require("@testing-library/user-event");
const { body, validationResult } = require("express-validator");
const note = require("../../models/Notes");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//save user notes in DB api/note/saveNotes Login required

exports.noteValidate = [
  body("title", "Enter Valid title of min 3 length").isLength({ min: 3 }),
  body("description", "Enter Valid description min 5 length").isLength({
    min: 5,
  }),
  body("tag", "Enter valid tag of min 3 length").isLength({ min: 3 }),
];

exports.saveNotes = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } else {
    console.log("user" + req.user_id);
    const { title, description, tag } = req.body;
    const newNote = new note({ title, description, tag, user: req.user_id });
    newNote.save((err, rst) => {
      if (err) {
        console.log(err);
        return res.status(400).json({ errors: err });
      } else {
        console.log("created:/n" + rst);
        return res.status(201).json({ result: rst });
      }
    });
    console.log("saved");
  }
};

// fetch all notes of user /api/note/getAllNotes Login required
exports.getAllNotes = async (req, res) => {
  let id = req.user_id;
  try {
    let allNotes = await note.find({ user: id });
    if (allNotes.length===0)
      return res.status(200).json({ msg: "no notes foumd...Please add a note" });
    else {
      return res.status(200).json(allNotes);
    }
  } catch (err) {
    res.status(500).json({ msg: "some error ocuured" });
  }
};

//update a note of user /api/note/updateNote/:id login required
exports.updateNote=async (req,res)=>{
    let id = req.params.id;
    console.log("id"+id);
    try {
        let unote = await note.findOne({_id:id});
        console.log("unote"+unote);
        if(!unote)
        return res.status(404).json({msg:"note not found "})
        else{
            // console.log(typeof unote.user)
            // console.log(typeof req.user_id)
            if(unote.user.toString()!==req.user_id)
             return res.status(403).json({ msg: "access denied" })
            else{
                let update = await note.findByIdAndUpdate(id,req.body,{new:true});
                return res.status(200).json({updated:update});
            }
        }
    } catch (err) {
       return  res.status(500).json({ msg: "some error ocuured" });
    }

}
//delete a given note /api/note/deleteNote/:id login required

exports.deleteNote=async (req,res)=>{
    let id = req.params.id;
    console.log("id"+id);
    try {
        let dnote = await note.findOne({_id:id});
        console.log("dnote"+dnote);
        if(!dnote)
        return res.status(404).json({msg:"note not found "})
        else{
         
            if(dnote.user.toString()!==req.user_id)
            return res.status(403).json({ msg: "access denied" })
            else{
                let del = await note.findByIdAndDelete(id);
                return res.status(200).json({deleted:del});
            }
        }
    } catch (err) {
        res.status(500).json({ msg: "some error ocuured" });
    }

}
