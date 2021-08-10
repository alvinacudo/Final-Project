const mongoose = require('mongoose');
const NotesSchema = new mongoose.Schema({

    userID: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }

}, { timestamps: true });

const Notes = mongoose.model('Notes', NotesSchema);
module.exports = Notes;