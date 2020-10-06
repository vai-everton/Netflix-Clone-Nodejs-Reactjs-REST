var express = require('express');
var router = express.Router();

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});



router.get('/', function(req, res){
    res.json({
      "msg": "Olá Mundo"
    });
});

router.get('/filmes', function(req, res) {
    res.json("filmes");
});

module.exports  = router;