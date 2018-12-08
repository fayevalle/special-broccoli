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


router.get('/api/puppies', db.getAllPuppies);
//router.get('/api/puppies/:id', db.getSinglePuppy);
router.post('/api/puppies', db.createPuppy);
//router.put('/api/puppies/:id', db.updatePuppy);
//router.delete('/api/puppies/:id', db.removePuppy);


module.exports = router;
