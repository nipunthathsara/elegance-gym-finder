'use strict';

var _ = require('lodash');
var GymModel = require('./gym.model');

// Get list of gyms
exports.findAll = function(cb) {
    GymModel.find(cb);
};

// Get a single gym
exports.findById = function(id, cb) {
    GymModel.findById(id, cb);
};

// Creates a new gym in the DB.
exports.create = function(item, cb) {
    GymModel.create(item, cb);
};

// Updates an existing gym in the DB.
exports.update = function(id, item, cb) {
    if (item._id) { delete item._id; }
    GymModel.findById(id, function(err, gym) {
        var updated = _.merge(gym, item);
        updated.save(function(err) {
            cb(err, gym);
        });
    });
};

//Nipun - delete entry
exports.delete = function(id, cb) {
    /*if (item._id) { delete item._id; }
    GymModel.findById(id, function(err, gym) {
        var updated = _.merge(gym, item);
        updated.save(function(err) {
            cb(err, gym);
        });
    });*/

    GymModel.findByIdAndRemove(id, function(err, result) {
            cb(err);
    });
};
