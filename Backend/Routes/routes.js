const express = require("express");
const route = express.Router();

const createUser = require("../controller/user");
const readUser = require("../controller/readUser");

route.post('/create', createUser.createUser)
route.get('/readuser', readUser)

module.exports = route;
