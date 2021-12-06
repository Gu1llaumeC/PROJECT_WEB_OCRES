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