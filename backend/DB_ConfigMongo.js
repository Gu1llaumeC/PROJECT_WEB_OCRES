const mongoose = require('mongoose');

mongoose.connect(

    "mongodb://localhost:27017/Dashboard",
    { useNewUrlParser: true, useUnifiedTopology: true },
        (err) => {
        if (!err) console.log("Test Connection MongoDB yes");
        else console.log("Connection error :" + err);
    }



)