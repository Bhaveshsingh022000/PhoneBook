const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    listemail: [{
        type: String,
        required: true,
        unique: true
    }],
    dateofbirth: {
        type: Date,
        required: false
    },
    listphoneno: [
        {
            type: Number,
            required: true,
            unique: true
        }
    ]

});

module.exports = mongoose.model('Contact',contactSchema);