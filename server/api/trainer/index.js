'use strict';

var express = require('express');
var multer = require('multer');
var controller = require('./trainer.controller');
var auth = require('../../auth/auth.service');
var router = express.Router();

// router.get('/', auth.isAuthenticated(), controller.index);
// router.get('/:id', auth.isAuthenticated(), controller.show);
// router.post('/', auth.isAuthenticated(), controller.create);
// router.put('/:id', auth.isAuthenticated(), controller.update);
// router.patch('/:id', auth.isAuthenticated(), controller.update);
// //******nipun delte route
// router.delete('/:id', auth.isAuthenticated(), controller.delete);//send id in params

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
//******nipun delte route
router.delete('/:id', controller.delete);
module.exports = router;