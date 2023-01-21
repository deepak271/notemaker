//create user at /api/auth


// module.exports=createUser;
 function createUser(req,res){
    res.send(req.body);
    console.log("body:"+req.body)
}
const getUser=(req,res)=>{
    res.send('hi');
    console.log('hi')
}

module.exports = {
    createUser,
    getUser
};