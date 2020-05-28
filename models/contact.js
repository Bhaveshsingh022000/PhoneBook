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
        type: String,
        required: false
    },
    listphoneno: [
        {
            type: Number,
            required: true,
            unique: true
        }
    ],
    imageUrl:{
        type:String,
        required:false
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }

});

module.exports = mongoose.model('Contact',contactSchema);