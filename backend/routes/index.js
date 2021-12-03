/*var express = require("express");
var router = express.Router();

/* GET home page. 
router.get("/", function(req, res, next) {
  res.send("This is my homepage");
});*/

const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const { request } = require('express');


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const test2 = require("./routes/test");
app.use('/test', test2);

module.exports = router;
