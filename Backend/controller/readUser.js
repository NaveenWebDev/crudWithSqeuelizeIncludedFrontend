const User = require("../Models/schema");

const readUser = async (req, res)=>{
    const data = await User.findAll({});
    res.status(200).json({data:data});
}

module.exports = readUser;