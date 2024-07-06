import mongoose from "mongoose";

const Schema = mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    memory_image: {
        type: String,
        required: true
    },
    location: {
        type: String
    },
    time: {
        type: Date,
        default: Date.now()
    }
}, {
    timestamps: false
});


const memory = mongoose.model('memory', Schema);

export default memory;