import mongoose from "mongoose"

const courseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    par: {type: Number, required: true},
    distance: {type: Number, required: true},
    slope: { type: Number, required: true }
});

export default mongoose.model('Courses', courseSchema)