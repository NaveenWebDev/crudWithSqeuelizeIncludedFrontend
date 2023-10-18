const express = require("express");
const route = express.Router();

const createUser = require("../controller/user");
const readUser = require("../controller/readUser");
const readOneUser = require("../controller/readOneUser");
const updateUser = require("../controller/updateUser");
const deleteUser = require("../controller/deleteUser");

route.post('/create', createUser.createUser)
route.get('/readuser', readUser)
route.get('/readuser/:id', readOneUser)
route.patch('/updateuser/:id', updateUser)
route.delete('/deleteuser/:id', deleteUser)

module.exports = route;
