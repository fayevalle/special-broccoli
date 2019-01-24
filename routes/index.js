/*var express = require('express');
var router = express.Router();
*/
/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/



//module.exports = router;










var express = require('express');
var cors = require('cors');
var router = express.Router();
var app = express();

app.use(cors({origin: '*'}));

app.use(function(req, res, next) {
   // Website you wish to allow to connect
   res.setHeader('Access-Control-Allow-Origin', '*');

   // Request methods you wish to allow
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

   // Request headers you wish to allow
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

   // Set to true if you need the website to include cookies in the requests sent
   // to the API (e.g. in case you use sessions)
   res.setHeader('Access-Control-Allow-Credentials', true);

   // Pass to next layer of middleware
   
  next();
});

var db = require('../queries');

//KAHIT DITO LANG YUNG LAGYAN

router.get('/api/residents', db.getAllResidents);
router.get('/api/events', db.getAllEvents);
router.get('/api/missing', db.getAllMissing);
router.get('/api/wanted', db.getAllWanted);
router.get('/api/puppies', db.getAllPuppies);

router.get('/api/residents/:id', db.getSingleResident);
<<<<<<< HEAD
router.post('/api/test', db.createTest);

router.post('/api/residents', db.createResident);
=======

router.post('/api/residents', db.createresidents);
>>>>>>> 1/18/19
router.post('/api/report', db.createReport);
router.post('/api/missing', db.createMissing);
router.post('/api/transaction', db.createTransaction);

router.put('/api/password/:id', db.updatePassword);

module.exports = router;
