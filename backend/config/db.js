const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:ADMIN@cluster0.p3gio.mongodb.net/Dashboard",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('Failed to connect to MongoDB :', err))