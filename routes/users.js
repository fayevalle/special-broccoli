var router = express.Router();
var express     = require('express');
var app         = express();
var morgan      = require('morgan');
var bodyParser  = require('body-parser');
var cors        = require('cors');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(cors());

app.use(function(req, res, next){
	res.header('Access-Control-Allow-Origin', "*");
	res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-tpye');
    next();
});
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
