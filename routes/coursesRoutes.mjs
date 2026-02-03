import express from "express"
import * as courseController from "../controllers/courseController.mjs"
import { validateCourse } from "../validators/validators.mjs";

// ROUTER 
const courseRouter = express.Router();

// CREATE COURSE
courseRouter.post("/", validateCourse, courseController.createCourse);

// GET COURSES
courseRouter.get("/", courseController.getCourses);

// GET COURSE 
courseRouter.get("/:id", courseController.getCourseByID);

// DELETE COURSE
courseRouter.delete("/:id", courseController.deleteCourse);

// UPDATE COURSE
courseRouter.put("/:id", courseController.updateCourse)

export default courseRouter 