//connect
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/team_manager', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("DB is hooked up and ready to rumble"))
    .catch(err => console.log("Error setting up db", err))

//set port