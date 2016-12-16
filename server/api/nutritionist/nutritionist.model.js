'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var NutritionistSchema = new Schema({
  name: String,
  phone:String,
  address:{no:String,street:String,city:String},
  availability:Boolean,
  // availability:String,
  rating:Number
});

module.exports = mongoose.model('Nutritionist', NutritionistSchema);