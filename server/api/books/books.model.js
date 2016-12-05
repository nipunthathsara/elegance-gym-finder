'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BookSchema = new Schema({
  name: String,
  author: String,
  ISBN: String,
});

module.exports = mongoose.model('Book', BookSchema);