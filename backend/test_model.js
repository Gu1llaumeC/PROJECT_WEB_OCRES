const mongoose = require("mongoose");

const PostsModel = mongoose.model(

    "Dashboard",
    {
        animal : {
            type: String,
            require : true
        },

        nom : {
            type: String,
            require : true
        },

        date : {
            type: Date,
            default: Date.now
        }
    },
    "Test"

);

module.exports = { PostsModel};