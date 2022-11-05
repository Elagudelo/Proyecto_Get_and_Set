var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Hola mundo' });
res.send("Este es una pagina hecha en nodejs")
});

module.exports = router;
