var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://wgldewicamedev:8d6d9755d8e6ceba962b9f61b8a4e4772218756930a3c4b2de8493f0428e0b8d@ec2-54-243-147-183.compute-1.amazonaws.com:5432/d68rvuaemp326g';
//var connectionString='postgres://localhost:15106/eprofile'
pgp.pg.defaults.ssl = true;
var db = pgp(connectionString);

// add query functions

module.exports = {
  getAllPuppies: getAllPuppies,
//getSinglePuppy: getSinglePuppy,
  createPuppy: createPuppy
//updatePuppy: updatePuppy,
//removePuppy: removePuppy
};


function getAllPuppies(req, res, next) {
  db.any('select * from admin_tbl')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL puppies'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}
function createPuppy(req, res, next) {
  req.body.age = parseInt(req.body.age);
  db.none('insert into admin_tbl(admin_id, username, password)' +
      'values(${admin_id}, ${username}, ${password})',
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one puppy'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}