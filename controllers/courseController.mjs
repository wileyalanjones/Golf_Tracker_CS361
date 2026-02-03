import Courses from "../models/courses.mjs"

const createCourse = async (req, res) => {
    const course = new Courses(req.body);
    const savedCourse = await course.save();
    res.status(201).json(savedCourse)
};

const getCourses = async (req, res) => {
    const courses = await Courses.find();
    res.json(courses);
}

const getCourseByID = async (req, res) => {
    const course = await Courses.findById({_id: req.params.id})
    res.json(course)
}

const deleteCourse = async (req, res) => {
    const courseDeleted = await Courses.deleteOne({_id: req.params.id});
    res.status(204).json(courseDeleted);
}

const updateCourse = async (req, res) => {
    const id = req.params.id;
    const updates = {
        name: req.body.name,
        location: req.body.location,
        par: req.body.par,
        distance: req.body.distance,
        slope: req.body.slope
    }
    const updatedCourse = await Courses.findByIdAndUpdate(id, updates, {new: true})
    res.status(200).json(updatedCourse)
}


export { createCourse, getCourses, deleteCourse, getCourseByID, updateCourse }