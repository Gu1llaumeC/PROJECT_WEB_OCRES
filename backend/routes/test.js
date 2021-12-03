const  express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Test of Dashboard');
  });

router.get('/testAv', (req,res) =>{
    res.send('On est la');
});

module.exports = router;