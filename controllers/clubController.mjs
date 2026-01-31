import Clubs from "../models/clubs.mjs"

const createClub = async (req, res) => {
    const club = new Clubs(req.body);
    const savedClub = await club.save();
    res.status(201).json(savedClub)
};

const getClubs = async (req, res) => {
    const clubs = await Clubs.find();
    res.json(clubs);
}

const deleteClub = async (req, res) => {
    const clubDeleted = await Clubs.deleteOne({_id: req.params.id});
    res.status(204).json(clubDeleted);
}

export { createClub, getClubs, deleteClub }