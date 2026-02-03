import Clubs from "../models/clubs.mjs"

const createClub = async (req, res) => {
    const club = new Clubs(req.body);
    const savedClub = await club.save();
    res.status(201).json(savedClub)
};

const getClubs = async (req, res) => {
    const clubs = await Clubs.find();
    res.status(200).json(clubs);
}

const getClubByID = async (req, res) => {
    const club = await Clubs.findById({_id: req.params.id})
    res.json(club)
}

const deleteClub = async (req, res) => {
    const clubDeleted = await Clubs.deleteOne({_id: req.params.id});
    res.status(204).json(clubDeleted);
}

const updateClub = async (req, res) => {
    const id = req.params.id;
    const updates = {
        type: req.body.type,
        brand: req.body.brand,
        model: req.body.model,
        year: req.body.year 
    }
    const updatedClub = await Clubs.findByIdAndUpdate(id, updates, {new: true})
    res.status(200).json(updatedClub)
}

export { createClub, getClubs, getClubByID, deleteClub, updateClub }
