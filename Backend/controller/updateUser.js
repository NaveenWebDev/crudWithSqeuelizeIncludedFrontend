const User = require("../Models/schema");

const updateUser = async (req, res)=>{
    var updateddata = req.body;
    const updateDate = await User.update(updateddata,{
        where:{
            id:req.params.id
        }
    })
    res.status(200).json({data:'Dataupdated Successful'})
}

module.exports = updateUser;