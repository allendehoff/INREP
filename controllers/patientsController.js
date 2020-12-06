const db = require("../models")

module.exports = {
    newPatient: function (req, res) {
        db.Patient
            .create(req.body)
            .then(newPatient => {
                // console.log(dbModel)
                return res.json(newPatient)
            })
    },

    findPtById: function (req, res) {
        // console.log(req.query.id)
        db.Patient
            .findById(req.query.id)
            .then(patient => {
                // console.log(patient)
                return res.json(patient)
            })
    },

    findByMostRecent: function (req, res) {
        db.Patient
            .find({}, "_id")
            .sort("-createdAt")
            .limit(1)
            .exec(function (req, res) {
                // return res.json()
                console.log(res)
            })
        // .find({},{ sort("-createdAt")},{limit:1}, function(req,res) {
        //     console.log(res)
        // })
        // .then(dbModel => res.json(dbModel))
        // .then(console.log(res))

    }
}