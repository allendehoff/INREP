const { func } = require("prop-types")
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
        // console.log("here")
        // console.log(req.params)
        db.Patient
            .findById(req.params.id)
            .then(patient => {
                // console.log(patient)
                return res.json(patient)
            })
    },

    updateById: function (req, res) {
        // console.log("here")
        console.log(req.params.id)
        console.log(req.body)
        db.Patient
            .updateOne({ _id: req.params.id }, {$set:{new_field:"test"}}, {multi:true})
            .then(console.log("done!"))

    }

    // findByMostRecent: function (req, res) {
    //     db.Patient
    //         .find({}, "_id")
    //         .sort("-createdAt")
    //         .limit(1)
    //         .exec(function (req, res) {
    //             // return res.json()
    //             console.log(res)
    //         })
    // .find({},{ sort("-createdAt")},{limit:1}, function(req,res) {
    //     console.log(res)
    // })
    // .then(dbModel => res.json(dbModel))
    // .then(console.log(res))

    // }
}