const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const { request } = require('express');
require('./config/db');
const postsRoutes = require('./OpController');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config({path : './config/.env'});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', postsRoutes);
app.use(cors());






app.listen(process.env.PORT, () => console.log(`Listening on ${process.env.PORT}`));

/*const test2 = require("./routes/test");
app.use('/test', test2);*/






/*
app.listen(3000, function() {
    console.log('listening on 3000')
  })

  const bdd_link = "mongodb+srv://Arnaud:leplusbeau@cluster0.87n0k.mongodb.net/DASHBOARD?retryWrites=true&w=majority"

MongoClient.connect(bdd_link, { useUnifiedTopology: true })
  .then(client => {

    console.log('Connected to Database')

})
.catch(error => console.error(error))*/