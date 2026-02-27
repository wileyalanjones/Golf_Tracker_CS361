import express from "express"
import * as roundController from "../controllers/roundController.mjs"
import { validateRound } from "../validators/validators.mjs";

// ROUTER 
const roundRouter = express.Router();

// CREATE ROUND
roundRouter.post("/", validateRound, roundController.createRound);

// GET ROUNDS
roundRouter.get("/", roundController.getRounds);

// GET ROUND BY ID
roundRouter.get("/:id", roundController.getRoundByID)

// DELETE ROUND
roundRouter.delete("/:id", roundController.deleteRound);

// UPDATE ROUND
roundRouter.put("/:id", roundController.updateRound)

export default roundRouter 