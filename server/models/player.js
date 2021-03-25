const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Player name is required."],
        minLength: [2, "Player name must be at least 2 characters long."],
        maxLength: [25, "Player name must be less than 25 characters long."]
    }, 
    position: {
        type: String,
        default: "None Preferred"
    },
    active: {
        type: Array,
        default: [0,0,0] //(0 = undecided, 1 = not playing, 2 = playing)
    }
}, {timestamps: true});

const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;