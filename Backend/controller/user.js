const User = require("../Models/schema") 

const createUser = async(req, res)=>{
    const postData = req.body;
    if(postData.length>1){
        // ====== for multiple data add=======
        var postdata = await User.bulkCreate(postData);
    }else{
        var postdata = await User.create(postData);
        postdata.save();
    }
    res.send("data sended");

}
module.exports= {
    createUser
}