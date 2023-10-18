const User = require("../Models/schema");

const readOneUser = async (req, res)=>{
    const data = await User.findOne({
        where:{
            id:req.params.id
        }
    });
    res.status(200).json({data:data})
}

module.exports = readOneUser;