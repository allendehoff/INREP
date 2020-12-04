const db = require("../models")

module.exports = {
    createUser: function(req,res) {
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
    },

    findUser: function(req,res) {
        console.log(req)
        // console.log(res)
        // db.User
        //     .find(req.)
    },

    foo: (bar) => console.log(bar)
}