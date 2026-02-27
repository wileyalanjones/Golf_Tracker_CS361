import mongoose from "mongoose"

const roundSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Courses', required: true },
    strokes: { type: Number, required: true},
    score: { type: Number, required: true},
    weather: { type: mongoose.Schema.Types.Mixed }
});

export default mongoose.model('Rounds', roundSchema)