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

    const weather = await getWeather(checkCourse, date);

    const round = new Rounds({ date, course: checkCourse._id, strokes, score, weather});
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
        course: req.body.course,
        strokes: req.body.strokes,
        score: req.body.score
    }
    const updatedRound = await Rounds.findByIdAndUpdate(id, updates, {new: true})
    res.status(200).json(updatedRound)
}

const getWeather = async (checkCourse, date) => {
    
    const newDate = new Date(date).toISOString().slice(0,10)
    const body = { 
        "lat": "", 
        "long": "", 
        "city": checkCourse.city, 
        "state": checkCourse.state,
        "date": newDate,
        "zipcode": "",
    }

    const response = await fetch(
        "http://localhost:3634/date", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
    });

    const data = await response.json()
    return data;

}

export { createRound, getRounds, getRoundByID, deleteRound, updateRound }