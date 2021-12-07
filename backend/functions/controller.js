const { ObjectID } = require('bson');
const QuoteModel = require('../models/quote.model');

module.exports.add = async (req, res) => {
    console.log(req.body);
    const {content} = req.body

    try{
        const quote = await QuoteModel.create({content});
        res.status(201).json({quote : quote._id});
    }
    catch(err){
        res.status(200).send({err});
    }
}

module.exports.getRandom = async(req, res) => {
    const quotes = await QuoteModel.find().select();
    var rand_i = Math.random() * (quotes.length);
    rand_i = Math.floor(rand_i);
    res.status(200).json(quotes[rand_i]);
}

module.exports.delete = async(req,res) => {
    if (!ObjectID.isValid(req.params.id))
    return res.status(400).send('ID unknown : ' + req.params.id)

    try
    {
        await QuoteModel.deleteOne({_id : req.params.id}).exec();
        res.status(200).json({
            message : "Successfully deleted!"
        });
    }
    catch(err)
    {
        return res.status(500).json({
            message : err
        });
    }
}