/*var express = require('express');
var router = express.Router();
*/
/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/



//module.exports = router;










var express = require('express');
var router = express.Router();

var db = require('../queries');

//KAHIT DITO LANG YUNG LAGYAN

router.get('/api/residents', db.getAllResidents);
router.get('/api/residents/:id', db.getSingleResident);
router.post('/api/report', db.createReport);
router.post('/api/missing', db.createMissing);


module.exports = router;
