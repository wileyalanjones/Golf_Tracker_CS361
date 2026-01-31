import express from "express"
import * as roundController from "../controllers/roundController.mjs"
import { validateRound } from "../validators/validators.mjs";

// ROUTER 
const roundRouter = express.Router();

// CREATE COURSE
roundRouter.post("/", validateRound, roundController.createRound);

// GET COURSES
roundRouter.get("/", roundController.getRounds);

// DELETE COURSE
roundRouter.delete("/:id", roundController.deleteRound);

export default roundRouter 