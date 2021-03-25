const Player = require('../models/player');

module.exports = {
    createPlayer: (req, res) => {
        Player.exists({name: req.body.name})
            .then(PlayerExists => {
                if(PlayerExists){
                    return Promise.reject({ errors: { name:  { message: "A Player with that name already exists."}}});
                } else {
                    return Player.create(req.body);
                }
            })
            .then(data => res.status(200).json({message: "success", results: data}))
            .catch(err => res.json({ message: "error", errors: err.errors }));
    },
    //r
    getAllPlayers: (req, res) => {
        Player.find()
            .then(data => res.status(200).json({message: "success", results: data}))
            .catch(err => res.json({message: "error", errors: err.errors}));
    },
    getOnePlayer: (req, res) => {
        Player.findById(req.params.id)
            .then(data => res.status(200).json({message: "success", results: data}))
            .catch(err => res.json({message: "error", errors: err.errors}))
    },
    updatePlayer: (req, res) => {
        Player.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
            .then(data => res.json({message: "success", results: data}))
            .catch(err => res.json({message: "error", errors: err.errors}));
    },
    //d
    deletePlayer: (req, res) => {
        Player.findOneAndDelete({_id: req.params.id})
            .then(data => res.json({message: "success", results: data}))
            .catch(err => res.json({message: "error", errors: err.errors}))
    }
}
