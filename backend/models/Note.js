const { type } = require('@testing-library/user-event/dist/type');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const NotesSchema = new Schema({
    user :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    title: {
        type: String,
        required: true
    },
    discription: {
        type: String,
        required: true,
    },
    tag: {
        type: String,
        default: "general"
    },
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Notes', NotesSchema);  