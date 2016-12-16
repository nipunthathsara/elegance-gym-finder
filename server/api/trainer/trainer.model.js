'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TrainerSchema = new Schema({
    services:String,
    price: String,
    certification:String,
    insured:String,
    facilityOrHouseCalls:String,
    location:String,
    name:String,
    phone: String
});

module.exports = mongoose.model('Trainer', TrainerSchema);
