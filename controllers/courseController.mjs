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

export { createCourse, getCourses, deleteCourse, getCourseByID }