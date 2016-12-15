'use strict';

var express = require('express');
var multer = require('multer');
var controller = require('./gym.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.get('/findTen/:id', controller.findTen);

router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
//******nipun delte route
router.delete('/:id', controller.delete);//send id in params

module.exports = router;