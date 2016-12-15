'use strict';

var express = require('express');
var controller = require('./nutritionist.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.delete);

// router.post('/check/:id', controller.check);

module.exports = router;