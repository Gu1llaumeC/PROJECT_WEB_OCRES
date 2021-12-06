const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema(
    {
        content:{
            type: String,
            required: true,
            unique: true,
        }
    },
    {
        timestamps : true
    }
);

const QuoteModel = mongoose.model("quote", quoteSchema);

module.exports = QuoteModel;