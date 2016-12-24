'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var NutritionistSchema = new Schema({
    name:String,
    gender:String,
    phone:String,
    address:{no:String, street:String, city:String},
    availability:Boolean,
    rating:Number,
    latitude: Number,
    longitude: Number
});

module.exports = mongoose.model('Nutritionist', NutritionistSchema);