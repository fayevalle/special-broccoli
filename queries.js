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
  getAllResidents: getAllResidents,
  getAllEvents: getAllEvents,
  getAllMissing: getAllMissing,
  getAllWanted: getAllWanted,
  getAllPuppies: getAllPuppies,
  getSingleResident: getSingleResident,
  createReport: createReport,
  createTransaction: createTransaction,
  createMissing: createMissing,
  createResident: createResident,
  updatePassword: updatePassword
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

function getAllEvents(req, res, next) {
  db.any('select * from events_tbl')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL events'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getAllMissing(req, res, next) {
  db.any('select * from missing_tbl where category="missing"')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL missing'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getAllWanted(req, res, next) {
  db.any('select * from wanted_tbl')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL wanted'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getSingleResident(req, res, next) {
  var resID = parseInt(req.params.id);
  db.one('select * from residents_tbl where id = $1', resID)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE Resident'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getAllPuppies(req, res, next) {
  db.any('select * from admin_tbl')
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

  db.none('insert into report_tbl(id, date, residentID, category, description)' +
      'values("", ${date}, ${residentID}, ${category}, ${description})',
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
  
function createTransaction(req, res, next) {
  req.body.age = parseInt(req.body.age);

  db.none('insert into transaction_tbl(id, transaction, purpose, others, date_claim, name, date_request)' +
      'values("", ${transaction}, ${purpose}, ${others}, ${date_claim}, ${name}, ${date_request})',
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one transaction'
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
}

function createResident(req, res, next) {
  req.body.age = parseInt(req.body.age);
  db.none('insert into residents_tbl(id, lastname, firstname, middlename, birthday, birthplace, civilstatus, housenumber, street, subdivision, barangay, city, email, contactno, password)' +
      'values("", ${lastname}, ${firstname}, ${middlename}, ${birthday}, ${birthplace}, ${civilstatus}, ${housenumber}, ${street}, ${subdivision}, ${barangay}, ${city}, ${email}, ${contactno}, ${password})',
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

function updatePassword(req, res, next) {
  db.none('update resident_tbl set password=$1 where resident_id=$2',
    [req.body.password, parseInt(req.params.id)])
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated password'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}