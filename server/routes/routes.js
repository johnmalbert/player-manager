const playerController = require('../controllers/controller');

module.exports = app => {
    app.post("/api/players", playerController.createPlayer);
    app.get("/api/players", playerController.getAllPlayers);
    app.get("/api/players/:id", playerController.getOnePlayer);
    app.put("/api/players/:id/", playerController.updatePlayer);
    app.delete("/api/players/:id/", playerController.deletePlayer);
}

