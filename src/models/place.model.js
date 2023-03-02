const mongoose = require('mongoose');

const placeSchema = mongoose.Schema ({
    title: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 50
    },
    types: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "TypePlace",
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    princing: {
        perDay: Number
    },
    images: [String],
    capacity: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
        minLength: 20,
        maxLength: 50
    },
    adresse: {
        city: String,
        street: String,
        zipCode: {
            type: Number,
            minLength:5,
            maxLength: 5
        },
        gps: {
            lat: Number,
            long: Number
        }
    }
})

module.exports = mongoose.model('Place',placeSchema)