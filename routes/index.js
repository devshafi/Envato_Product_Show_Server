var express = require('express');
var router = express.Router();

const Envato = require('envato');
let client = new Envato.Client('M9GIqjMyXxyuRTVDzpltXnssN0LFEBuW');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});


router.get('/data', async function (req,res) {
  let items = await client.catalog.getRandomNewFiles('themeforest');
  //console.log('items',items);
  res.status(200).send(items);
});

module.exports = router;
