const { default: userEvent } = require('@testing-library/user-event');
const { body, validationResult } = require('express-validator');
const user = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt    =require('jsonwebtoken')

//helper function

//create user at /auth/addUser
exports.authCreate=[body('name','Enter Valid Name min 3 length').isLength({min:3}),
                    body('email','Enter valid Email').isEmail(),
                    body('password','Enter Valid Password min 5 length').isLength({min:5})]

exports.createUser=async(req,res)=>{
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
   
    // hash password
    var salt = await bcrypt.genSalt(10);
    req.body.password =  await bcrypt.hash(req.body.password,salt);
    // req.body.mobile = await bcrypt.hash(req.body.mobile,salt);
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

//validate user login at /api/auth/login
exports.authValidate=[
                     body('email','Enter valid Email').isEmail(),
                     ]
exports.userLogin=async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    else{
        const {email,password}=req.body;
        var userExist =await user.findOne({email});
        
        if(!userExist)
        {
            return res.status(400).json({msg:"User does not exist"});
        }
        else{
            // console.log(userExist);
            // res.status(200).json(userExist)
            const isCorrect =await  bcrypt.compare(password,userExist.password);
            console.log(isCorrect+'isc')
            if(!isCorrect)
            return res.status(400).json({msg:"please enter correct credentials"});
            else{
                const payload={
                    u_id:userExist._id
                }
                const token = await jwt.sign(payload,process.env.SECRET_KEY)
                console.log(token);
                return res.status(200).json({token});
            }
        }
    }
}

exports.getUser= async(req,res)=>{
    console.log('in getUser fun')
    var id = req.user_id
    try {
        var userExist =await user.findOne({_id:id});
        console.log("id"+id)
        res.send(userExist)
    } catch (err) {
        res.status(404).json({msg:"not found"})
    }     
}
