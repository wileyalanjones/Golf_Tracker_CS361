import Clubs from "../models/clubs.mjs"

const createClub = async (req, res) => {
    try {
        const club = await Clubs.create(req.body);
        res.status(201).json(club)
    } 
    catch (error) {
        res.status(400).json({error: error.message})
    }
};

const getClubs = async (req, res) => {
    try {
        const clubs = await Clubs.find();
        res.json(clubs);
    } 
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}