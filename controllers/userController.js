const db = require("../models")

module.exports = {
    createUser: function(req,res) {
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
    }
}