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
<<<<<<< HEAD
  getAllResidents: getAllResidents,
  getSingleResident: getSingleResident,
  createReport: createReport,
  createMissing: createMissing,
};


function getAllResidents(req, res, next) {
  db.any('select * from residents_tbl')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL Residents'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getSingleResident(req, res, next) {
  var resID = parseInt(req.params.id);
  db.one('select * from residents_tbl where residents_id = $1', resID)
=======
  getAllPuppies: getAllPuppies,
//getSinglePuppy: getSinglePuppy,
  createPuppy: createPuppy
//updatePuppy: updatePuppy,
//removePuppy: removePuppy
};


function getAllPuppies(req, res, next) {
  db.any('select * from admin_tbl')
>>>>>>> f78ba2c97806ffb4b4a1a81ff887c401f2a4dad0
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE resident'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function createReport(req, res, next) {
  req.body.age = parseInt(req.body.age);
<<<<<<< HEAD
  db.none('insert into report_tbl(id, date, residentID, category, description)' +
      'values("", ${date}, ${residentID}, ${category}, ${description})',
=======
  db.none('insert into admin_tbl(admin_id, username, password)' +
      'values(${admin_id}, ${username}, ${password})',
>>>>>>> f78ba2c97806ffb4b4a1a81ff887c401f2a4dad0
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one report'
        });
    })
    .catch(function (err) {
      return next(err);
    });
  }
      
function createMissing(req, res, next) {
  req.body.age = parseInt(req.body.age);
  db.none('insert into missing_tbl(id, date, residentID, category, type, name, age, contactno, address, description)' +
      'values("", ${date}, ${residentID}, ${category}, ${type}, ${name}, ${age}, ${contactno}, ${address}, ${description})',
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one report'
        });
    })
    .catch(function (err) {
      return next(err);
    });
<<<<<<< HEAD

=======
>>>>>>> f78ba2c97806ffb4b4a1a81ff887c401f2a4dad0
}