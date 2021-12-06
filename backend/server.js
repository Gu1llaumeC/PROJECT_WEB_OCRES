const express = require('express');
const bodyParser = require('body-parser');
const quoteRoutes = require('./routes/quote');
require('./config/db');
require('dotenv').config({path : './config/.env'});
const app = express();




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

//routes
app.use('/api/quote', quoteRoutes);



//server
app.listen(process.env.PORT, () => console.log(`Listening on ${process.env.PORT}`));