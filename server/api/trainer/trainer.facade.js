'use strict';

var _ = require('lodash');
var TrainerModel = require('./trainer.model');

// Get list of trainers
exports.findAll = function(cb) {
    TrainerModel.find(cb);
};

// Get a single trainer
exports.findById = function(id, cb) {
    TrainerModel.findById(id, cb);
};

// Creates a new trainer in the DB.
exports.create = function(item, cb) {
    TrainerModel.create(item, cb);
};

// Updates an existing trainer in the DB.
exports.update = function(id, item, cb) {
    if (item._id) { delete item._id; }
    TrainerModel.findById(id, function(err, trainer) {
        var updated = _.merge(trainer, item);
        updated.save(function(err) {
            cb(err, trainer);
        });
    });
};

//Nipun - delete entry
exports.delete = function(id, cb) {
    /*if (item._id) { delete item._id; }
     TrainerModel.findById(id, function(err, trainer) {
     var updated = _.merge(trainer, item);
     updated.save(function(err) {
     cb(err, trainer);
     });
     });*/

    TrainerModel.findByIdAndRemove(id, function(err, result) {
        cb(err);
    });
};
