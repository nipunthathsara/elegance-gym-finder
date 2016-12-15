'use strict';
var multer = require('multer');
var _ = require('lodash');
var TrainerFacade = require('./trainer.facade');

exports.index = function(req, res) {
    TrainerFacade.findAll(function(err, trainers) {
        if (err) {
            return handleError(res, err);
        }
        return res.json(200, trainers);
    });
};

exports.show = function(req, res) {
    TrainerFacade.findById(req.params.id, function(err, trainer) {
        if (err) {
            return handleError(res, err);
        }
        if (!trainer) {
            return res.send(404);
        }
        return res.json(trainer);
    });
};

exports.create = function(req, res) {
    //*******************Uploading the image to folder, doesn't work
    console.log("reached");
    upload(req, res, function(err) {
        if (err) {
            console.log('Error Occured');
            return;
        }
        console.log(req.body);
        console.log(req.Blob);
        //res.end('Your File Uploaded');
        console.log('Photo Uploaded');
    });
    console.log("reached");
    //*******************

    TrainerFacade.create(req.body, function(err, trainer) {
        if (err) {
            return handleError(res, err);
        }
        return res.json(201, trainer);
    });
};

exports.update = function(req, res) {
    if (req.body._id) { delete req.body._id; }
    TrainerFacade.update(req.params.id, req.body, function(err, trainer) {
        if (err) {
            return handleError(res, err);
        }
        return res.json(200, trainer);
    });
};

//********************delete controller function - nipun - works fine
exports.delete = function(req, res) {
    TrainerFacade.delete(req.params.id, function(err){
        if(err){
            return handleError(res, err);
        }
        return res.json(200, 'trainer deleted successfully');
    });
};
//**********************

//******************** configuring Multer
var storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './uploads')
    },
    filename: function(req, file, callback) {
        console.log('configuration file reached');
        console.log(file);
        callback(null, file.originalname);
    }
});

var upload = multer({ storage: storage }).single('photo');
//********************

function handleError(res, err) {
    return res.send(500, err);
}