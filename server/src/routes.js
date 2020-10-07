var express = require('express');
const FilmeController = require('./controllers/FilmesController');

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

router.post('/filmes', FilmeController.store);


module.exports  = router;