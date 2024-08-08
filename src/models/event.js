const mongoose = require('mongoose');


const eventSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        required:true,
    },
    attendees:
        [{
            type:mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }],
});

export default mongoose.model('Event', eventSchema);