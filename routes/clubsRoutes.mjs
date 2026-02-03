import express from "express"
import * as clubController from "../controllers/clubController.mjs"
import { validateClub } from "../validators/validators.mjs";

// ROUTER 
const clubRouter = express.Router();

// CREATE CLUB
clubRouter.post("/", validateClub, clubController.createClub);

// GET CLUBS
clubRouter.get("/", clubController.getClubs);

// DELETE CLUBS
clubRouter.delete("/:id", clubController.deleteClub);

// UPDATE CLUB 
clubRouter.put("/:id", clubController.updateClub)

export default clubRouter 
