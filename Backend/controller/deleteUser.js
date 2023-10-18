const User = require("../Models/schema");

const deleteUser = async (req, res)=>{
    const deletedata = await User.destroy({
        where:{
            id:req.params.id
        }
    })
    res.status(200).json({data:deletedata})
}

module.exports = deleteUser;