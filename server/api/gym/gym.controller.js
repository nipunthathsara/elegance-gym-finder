'use strict';
var multer = require('multer');
var _ = require('lodash');
var GymFacade = require('./gym.facade');


exports.index = function (req, res) {
    GymFacade.findAll(function (err, gyms) {
        if (err) {
            return handleError(res, err);
        }

        if (gyms) {
            return res.json(200, gyms);
        }

    });
};

exports.getNearestGymsByType = function (req, res) {
    GymFacade.getNearestGymsByType(req.params.type,function (err, gyms) {
        if (err) {
            return handleError(res, err);
        }

        if (gyms) {
            return res.json(200, gyms);
        }

    });
};


exports.findTen = function (req, res) {
    GymFacade.findTen(function (err, gyms) {
        if (err) {
            return handleError(res, err);
        }
        if (gyms) {
            var func = pageLimit(gyms);
            return res.json(200, gyms);

        }

    });
};


exports.show = function (req, res) {
    GymFacade.findById(req.params.id, function (err, gym) {
        if (err) {
            return handleError(res, err);
        }
        if (!gym) {
            return res.send(404);
        }
        return res.json(gym);
    });
};

exports.create = function (req, res) {
    //*******************Uploading the image to folder, doesn't work
    /*console.log("reached");
    upload(req, res, function (err) {
        if (err) {
            console.log('Error Occured');
            return;
        }
        console.log(req.body);
        console.log(req.Blob);
        //res.end('Your File Uploaded');
        console.log('Photo Uploaded');
    });
    console.log("reached");*/
    //*******************

    GymFacade.create(req.body, function (err, gym) {
        if (err) {
            return handleError(res, err);
        }
        return res.json(201, gym);
    });
};

exports.update = function (req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    GymFacade.update(req.params.id, req.body, function (err, gym) {
        if (err) {
            return handleError(res, err);
        }
        return res.json(200, gym);
    });
};

//********************delete controller function - nipun - works fine
exports.delete = function (req, res) {
    GymFacade.delete(req.params.id, function (err) {
        if (err) {
            return handleError(res, err);
        }
        return res.json(200, 'gym deleted successfully');
    });
};
//**********************

//******************** configuring Multer
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './uploads')
    },
    filename: function (req, file, callback) {
        console.log('configuration file reached');
        console.log(file);
        callback(null, file.originalname);
    }
});

var upload = multer({storage: storage}).single('photo');
//********************

function handleError(res, err) {
    return res.send(500, err);
}