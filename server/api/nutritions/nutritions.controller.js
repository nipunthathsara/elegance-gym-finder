'use strict';

var _ = require('lodash');
var NutritionFacade = require('./nutritions.facade');

exports.index = function(req, res) {
    NutritionFacade.findAll(function(err, nutritions) {
        if (err) {
            return handleError(res, err); }
        return res.json(200, nutritions);
    });
};

exports.show = function(req, res) {
    NutritionFacade.findById(req.params.id, function(err, nutrition) {
        if (err) {
            return handleError(res, err); }
        if (!nutrition) {
            return res.send(404); }
        return res.json(nutrition);
    });
};

exports.create = function(req, res) {
    NutritionFacade.create(req.body, function(err, nutrition) {
        if (err) {
            return handleError(res, err); }
        return res.json(201, nutrition);
    });
};

exports.update = function(req, res) {
    if (req.body._id) { delete req.body._id; }
    NutritionFacade.update(req.params.id, req.body, function(err, nutrition) {
        if (err) {
            return handleError(res, err); }
        return res.json(200, nutrition);
    });
};

function handleError(res, err) {
    return res.send(500, err);
}
