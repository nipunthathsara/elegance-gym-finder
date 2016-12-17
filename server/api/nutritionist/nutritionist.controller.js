'use strict';

var _ = require('lodash');
var NutritionistFacade = require('./nutritionist.facade');

exports.index = function (req, res) {
    NutritionistFacade.findAll(function (err, nutritionists) {
        if (err) {
            return handleError(res, err);
        }
        return res.json(200, nutritionists);
    });
};

exports.show = function (req, res) {
    NutritionistFacade.findById(req.params.id, function (err, nutritionist) {
        if (err) {
            return handleError(res, err);
        }
        if (!nutritionist) {
            return res.send(404);
        }
        return res.json(nutritionist);
    });
};

exports.create = function (req, res) {
    NutritionistFacade.create(req.body, function (err, nutritionist) {
        if (err) {
            return handleError(res, err);
        }
        return res.json(201, nutritionist);
    });
};

exports.update = function (req, res) {
    console.log(req.params.id + "contraaa");
    if (req.body._id) {
        delete req.body._id;
    }
    NutritionistFacade.update(req.params.id, req.body, function (err, nutritionist) {
        if (err) {
            return handleError(res, err);
        }
        return res.json(200, nutritionist);
    });
};

exports.delete = function (req, res) {
    NutritionistFacade.delete(req.params.id, function (err) {
        if (err) {
            return handleError(res, err);
        }
        return res.json(200, 'nutritionist deleted successfully');
    });
};


// exports.check = function(req, res) {

// console.log(req.params.id+"shoyi")
// };

function handleError(res, err) {
    return res.send(500, err);
}
