import mongoose from "mongoose"

const clubSchema = new mongoose.Schema(
    {
    type: { type: String, required: true },
    brand: { type: String, required: true },
    model: { type: String },
    year: {type: String}
});

export default mongoose.model('Clubs', clubSchema)