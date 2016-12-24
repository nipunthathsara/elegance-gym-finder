'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TrainerSchema = new Schema({
    services:String,
    price:Number,
    certification:String,
    insureStatus:Boolean,
    facilityOrHouseCalls:String,
    location:String,
    name:String,
    gender:String,
    phone:String,
    rating:Number,
    availability:Boolean,
    email: String
});

module.exports = mongoose.model('Trainer', TrainerSchema);
