const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// var validator = require('validator');

const eventSchema = new Schema({
    place: {
        type: String,
        required: true,
        trim:true,
        unique:true
    },
    details: {
        type: Object,
        required: true,
    }
});

const Event = mongoose.model('event', eventSchema);
module.exports = Event;