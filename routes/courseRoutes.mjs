import express from "express"
import * as courseController from "../controllers/courseController.mjs"
import { validateCourse } from "../validators/validators.mjs";

// ROUTER 
const courseRouter = express.Router();

// CREATE CLUB
courseRouter.post("/", validateCourse, courseController.createCourse);

// GET CLUBS
courseRouter.get("/", courseController.getCourses);

// DELETE CLUBS
courseRouter.delete("/:id", courseController.deleteCourse);

export default courseRouter 