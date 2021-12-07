const router = require('express').Router();
const controller = require('../functions/controller');

router.post('/add', controller.add);

router.get('/random',controller.getRandom);

router.delete('/delete/:id',controller.delete);

module.exports = router;