var express = require('express');
var router = express.Router();
const sql = require('../API_Operation')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Test connect */
router.get('/getGroups', function(req, res, next) {
  sql.getGroups().then((result)=>{
    res.json(result[0])
  })
});

router.get('/getGroups_HYBE', function(req, res, next) {
  sql.getGroups_HYBE().then((result)=>{
    res.json(result[0])
  })
});

module.exports = router;
