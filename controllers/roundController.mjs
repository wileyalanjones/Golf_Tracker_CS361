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
    const rounds = await Rounds.find();
    res.json(rounds);
}

const deleteRound = async (req, res) => {
    const roundDeleted = await Rounds.deleteOne({_id: req.params.id});
    res.status(204).json(roundDeleted);
}

export { createRound, getRounds, deleteRound }