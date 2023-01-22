const router = require("express").Router();
const userServices = require('../services/userServices')
const noteServices=require('../services/noteServices')
const authService = require('../services/auth')

// router.get('/',services.create)
//router.get('/',services.getUser)

//------>user auth Routes

//check for user login
router.post('/login',userServices.authValidate,userServices.userLogin)
//addUser to DB
router.post('/addUser',userServices.authCreate,userServices.createUser)
//get user details after login
router.post('/getUser',authService.fetchUser,userServices.getUser);

//------->note Routes
// save a note of the user
router.post('/saveNotes',noteServices.noteValidate,authService.fetchUser,noteServices.saveNotes);
//get all the notes of the user
router.get('/getAllNotes',authService.fetchUser,noteServices.getAllNotes);
//update a note
router.put('/updateNote/:id',authService.fetchUser,noteServices.updateNote);
//delete a note
router.delete('/deleteNote/:id',authService.fetchUser,noteServices.deleteNote);

module.exports = router;