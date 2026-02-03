import Rounds from "../models/rounds.mjs"
import Courses from "../models/courses.mjs"

const createRound = async (req, res) => {

    const { date, strokes, score, course, } = req.body;

    const checkCourse = await Courses.findById(course);
    if (!checkCourse) return res.status(400).json({ erorr: "Course not found "});

    const expectedScore = strokes - checkCourse.par;
    if (score !== expectedScore) {
        return res.status(400).json({ error: "Score must equal strokes minus par"})
    }

    const round = new Rounds({ date, course: checkCourse._id, strokes, score});
    const savedRound = await round.save();
    res.status(201).json(savedRound)
};

const getRounds = async (req, res) => {
    const rounds = await Rounds.find().populate('course');
    res.json(rounds);
}

const getRoundByID = async (req, res) => {
    const round = await Rounds.findById({_id: req.params.id}).populate('course')
    res.json(round)
}

const deleteRound = async (req, res) => {
    const roundDeleted = await Rounds.deleteOne({_id: req.params.id});
    res.status(204).json(roundDeleted);
}

const updateRound = async (req, res) => {
    const id = req.params.id;
    const updates = {
        date: req.body.date,
        course: req.body.course._id,
        strokes: req.body.strokes,
        score: req.body.score
    }
    const updatedRound = await Rounds.findByIdAndUpdate(id, updates, {new: true})
    res.status(200).json(updatedRound)
}


export { createRound, getRounds, getRoundByID, deleteRound, updateRound }