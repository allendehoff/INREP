const { func } = require("prop-types")
const db = require("../models")
const mongoose = require("mongoose")

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
        const id = mongoose.Types.ObjectId(req.params.id);
        console.log(id)
        // console.log("here")
        console.log(req.params.id)
        console.log(req.body)

        db.Patient
            .findByIdAndUpdate({ id }, { $addFields: { new_field: "test" } })
        // db.Patient.aggregate([
        //     { $match: { _id: req.params.id } },
        //     { $addFields: { new_field: "test" } }
        // ])
        //     .then(console.log("done"))

        // db.Patient
        //     .findOneAndUpdate({ _id: id}, { new_field: "test" }
        //     //  function(err,pt) {
        //     //     if (err) console.log(err)
        //     //     if (pt) (patient => {
        //     //         console.log(patient)
        //     //         // return res.json(patient)
        //     //     })
        //     // }
        //     )
        //     .then(patient => {
        //         console.log(patient)
        //         // return res.json(patient)
        //     })
        // .exec(console.log("done!"))

    },

    findSix: function (req, res) {
        db.Patient
            .find(req.query)
            .sort({ createdAt: -1 })
            .then(patients => 
                // console.log(patients)
                res.json(patients)
            )

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