'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GymSchema = new Schema({
  name: String,
  location: String,
  type: String,
  address: String,
  phone: String,
  price: String,
  hours: String,
  webSite: String,
  favourite: Boolean,
  cover: { data: Buffer, contentType: String }
});

module.exports = mongoose.model('Gym', GymSchema);