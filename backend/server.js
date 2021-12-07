const express = require('express');
const bodyParser = require('body-parser');
const quoteRoutes = require('./routes/quote');
require('./config/db');
require('dotenv').config({path : './config/.env'});
const cors = require('cors');



const app = express();

const corsOptions = {
    origin : process.env.CLIENT_URL,
    credentials : true,
    'allowedHeaders' : ['sessionId', 'Content-Type'],
    'exposedHeaders' : ['sessionId'],
    'methods' : 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue' : false
}

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

//routes
app.use('/api/quote', quoteRoutes);



//server
app.listen(process.env.PORT, () => console.log(`Listening on ${process.env.PORT}`));