const router = require('express').Router();
const controller = require('../functions/controller')

router.post('/add', controller.add);

module.exports = router;