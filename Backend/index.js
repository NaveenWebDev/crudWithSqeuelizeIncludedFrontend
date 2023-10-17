const express = require("express");
const app = express();
require("./Config/dbConnect");
require("dotenv").config();
const tableSchema = require("./Models/schema");
const routes = require("./Routes/routes");
var cors = require('cors');

const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());
//routes
app.use("/api/v1", routes);

tableSchema.sync({force:false});

app.listen(port, ()=>{
    console.log(`app is running on ${port} number`);
})

//defalult routes

app.get('/', (req, res)=>{
    res.send("hello world this is home page")
})