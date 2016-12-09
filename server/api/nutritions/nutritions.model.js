'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var NutritionSchema = new Schema({
  name: String,
  contactNo:String,
  address:{no:String,street:String,city:String},
  available:Boolean,
  rating:Number
});

module.exports = mongoose.model('Nutrition', NutritionSchema);