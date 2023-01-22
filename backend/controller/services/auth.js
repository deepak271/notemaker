const jwt = require('jsonwebtoken');
exports.fetchUser=async (req,res,next)=>{
    let token = req.header('auth-token');
    if(!token)
  {
    return res.status(401).json({msg:"invalid login please login again"})
  }
  else{
    try {
        let data =  await jwt.verify(token,process.env.SECRET_KEY);
        req.user_id = data.u_id;
        console.log('authenticated:'+req.user_id)
    } catch (error) {
        //console.log(error)
        return res.status(401).json({msg:"please login again using valid data"})
    }

  }
  next();
}