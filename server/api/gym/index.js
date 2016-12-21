'use strict';

var express = require('express');
var multer = require('multer');
var controller = require('./gym.controller');

var auth = require('../../auth/auth.service');

var router = express.Router();

// router.get('/', auth.isAuthenticated(), controller.index);
// router.get('/:id',auth.isAuthenticated(), controller.show);
// router.get('/:id',auth.isAuthenticated(), controller.show);
router.get('/',  controller.index);
router.get('/:id', controller.show);
router.get('/:id', controller.show);
router.get('/findTen/:id', controller.findTen);//remove this route

// router.post('/', auth.isAuthenticated(), controller.create);
// router.put('/:id', auth.isAuthenticated(), controller.update);
// router.patch('/:id', auth.isAuthenticated(), controller.update);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
//******nipun delte route
router.delete('/:id', auth.isAuthenticated(), controller.delete);//send id in params

module.exports = router;