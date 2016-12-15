'use strict';

var _ = require('lodash');
var NutritionistModel = require('./nutritionist.model');

// Get list of nutritionist
exports.findAll = function(cb) {
    NutritionistModel.find(cb);
};

// Get a single nutritionist
exports.findById = function(id, cb) {
    NutritionistModel.findById(id, cb);
};

// Creates a new nutritionist in the DB.
exports.create = function(item, cb) {
    NutritionistModel.create(item, cb);
};

// Updates an existing nutritionist in the DB.
exports.update = function(id, item, cb) {
    if (item._id) { delete item._id; }
    NutritionistModel.findById(id,function(err, nutritionist) {
        var updated = _.merge(nutritionist, item);
        updated.save(function(err) {
            cb(err, nutritionist);
        });
    });
};

exports.delete = function(id, cb) {

    NutritionistModel.findByIdAndRemove(id, function(err, result) {
            cb(err);
    });
};
