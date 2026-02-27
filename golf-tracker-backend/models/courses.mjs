import mongoose from "mongoose"

const courseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true},
    par: {type: Number, required: true},
    distance: {type: Number, required: true},
    slope: { type: Number, required: true }
});

export default mongoose.model('Courses', courseSchema)