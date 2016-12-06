'use strict';

var _ = require('lodash');
var GymFacade = require('./gym.facade');

exports.index = function(req, res) {
    GymFacade.findAll(function(err, gyms) {
        if (err) {
            return handleError(res, err); }
        return res.json(200, gyms);
    });
};

exports.show = function(req, res) {
    GymFacade.findById(req.params.id, function(err, gym) {
        if (err) {
            return handleError(res, err); }
        if (!gym) {
            return res.send(404); }
        return res.json(gym);
    });
};

exports.create = function(req, res) {
    GymFacade.create(req.body, function(err, gym) {
        if (err) {
            return handleError(res, err); }
        return res.json(201, gym);
    });
};

exports.update = function(req, res) {
    if (req.body._id) { delete req.body._id; }
    GymFacade.update(req.params.id, req.body, function(err, gym) {
        if (err) {
            return handleError(res, err); }
        return res.json(200, gym);
    });
};

function handleError(res, err) {
    return res.send(500, err);
}
