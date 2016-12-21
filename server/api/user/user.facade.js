'use strict';

var _ = require('lodash');
var UserModel = require('./user.model');

// Get list of users
exports.findAll = function (cb) {
    UserModel.find(cb);
};

// Get a single user
exports.findById = function (id, cb) {
    UserModel.findById(id, cb);
};

// Creates a new user in the DB.
exports.create = function (item, cb) {
    UserModel.create(item, cb);
};

// Updates an existing user in the DB.
exports.update = function (id, item, cb) {
    if (item._id) {
        delete item._id;
    }
    UserModel.findById(id, function (err, user) {
        var updated = _.merge(user, item);
        updated.save(function (err) {
            cb(err, user);
        });
    });
};

//Nipun - delete entry
exports.delete = function (id, cb) {
    /*if (item._id) { delete item._id; }
     UserModel.findById(id, function(err, user) {
     var updated = _.merge(user, item);
     updated.save(function(err) {
     cb(err, user);
     });
     });*/

    UserModel.findByIdAndRemove(id, function (err, result) {
        cb(err);
    });
};
