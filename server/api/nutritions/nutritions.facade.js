'use strict';

var _ = require('lodash');
var NutritionModel = require('./nutritions.model');

// Get list of nutrition
exports.findAll = function(cb) {
    NutritionModel.find(cb);
};

// Get a single nutrition
exports.findById = function(id, cb) {
    NutritionModel.findById(id, cb);
};

// Creates a new nutrition in the DB.
exports.create = function(item, cb) {
    NutritionModel.create(item, cb);
};

// Updates an existing nutrition in the DB.
exports.update = function(id, item, cb) {
    if (item._id) { delete item._id; }
    NutritionModel.findById(id,function(err, nutrition) {
        var updated = _.merge(nutrition, item);
        updated.save(function(err) {
            cb(err, nutrition);
        });
    });
};
