import mongoose from "mongoose"

const roundSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Courses', required: true },
    par: {type: Number, required: true},
    distance: {type: Number, required: true},
    slope: { type: Number, required: true }
});

export default mongoose.model('Rounds', roundSchema)