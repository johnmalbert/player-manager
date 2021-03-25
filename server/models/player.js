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
    },
    bats: {
        type: String,
        default: "R",
        maxLength: [1]
    },
    throws: {
        type: String,
        default: "R",
        maxLength: [1]
    },
    jerseyNumber: {
        type: Number,
        min: [0, "Number must be higher than 0"],
        max: [99, "Number must be two digits only"],
        default: 1
    }
}, {timestamps: true});

const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;