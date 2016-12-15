'use strict';

var mongoose = require('mongoose'),
mongoosePaginate = require('mongoose-paginate'),
    Schema = mongoose.Schema;

var GymSchema = new Schema({
    name: String,
    location: String,
    type: String,
    address: String,
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
GymSchema.plugin( mongoosePaginate );

module.exports = mongoose.model('Gym', GymSchema);
