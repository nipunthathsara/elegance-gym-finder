'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GymSchema = new Schema({
    name: String,
    location: String,
    type: String,
    address:{no:String,street:String,city:String},
    phone: String,
    price: String,
    hours: String,
    webSite: String
    /*path: {
        type: String,
        required: true,
        trim: true
    },
    originalname: {
        type: String,
        required: true
    }*/
});


module.exports = mongoose.model('Gym', GymSchema);
