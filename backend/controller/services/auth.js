const { default: userEvent } = require('@testing-library/user-event');
const { body, validationResult } = require('express-validator');
const user = require('../../models/User');
//create user at /api/auth
exports.authenticate=[body('name','Enter Valid Name min 3 length').isLength({min:3}),
                    body('email','Enter valid Email').isEmail(),
                    body('password','Enter Valid Password min 5 length').isLength({min:5})]

exports.createUser=(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  else {
    //method1

    // const newUser = new user(req.body);
    //   newUser.save((err,rst)=>{
    //     if(err){
    //         console.log(err)
    //         return res.status(400).json({ errors: err})
    //     }
    //     else{
    //         console.log("created:/n"+rst)
    //         return res.status(201).json({result:rst});
    //     }
    //   })

    //method 2
    user.create(req.body).then((rst)=>{
        console.log("created:\n"+rst)
        return res.status(201).json({result:rst});
    }).catch((err)=>{
        console.log(err)
        return res.status(400).json({ errors: err})
    })
  }
}

exports.getUser=(req,res)=>{
    res.send('welcome');

}
