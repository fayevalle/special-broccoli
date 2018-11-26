var express = require('express');
var cors = require('cors');
var router = express.Router();
var app = express();


app.use(cors({
  origin: '*'
}));
var db = require('../queries');


router.get('/api/puppies', db.getAllPuppies);
router.get('/api/puppies/:id', db.getSinglePuppy);
router.post('/api/puppies', db.createPuppy);
router.put('/api/puppies/:id', db.updatePuppy);
router.delete('/api/puppies/:id', db.removePuppy);


module.exports = router;
