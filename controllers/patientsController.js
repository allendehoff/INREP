const db = require("../models")
const mongoose = require("mongoose")

module.exports = {

    newPatient: function (req, res) {
        // if (navigator.onLine) {
            db.Patient
                .create(req.body)
                .then(newPatient => {
                    // console.log(dbModel)
                    return res.json(newPatient)
                })
        // } else {console.log("offline!!!")}
    },

    findSix: function (req, res) {
        db.Patient
            .find(req.query)
            .limit(6)
            .sort({ createdAt: -1 })
            .then(patients =>
                // console.log(patients)
                res.json(patients)
            )
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

    updateVitals: function (req, res) {
        const id = mongoose.Types.ObjectId(req.params.id);
        try {
            db.Patient
                .findByIdAndUpdate({ _id: id }, { $push: { vitals: req.body } }, { new: true }, (err, result) => {
                    if (err) { console.log(err) }
                    else { console.log(result); res.send(result) }
                })
        } catch (err) {
            console.log("ERR:".err)
        }
        // console.log(id)
        // console.log("here")
        // console.log(req.params.id)
        // console.log(req.body)
    },

    updateCriticals: function (req,res) {
        const id = mongoose.Types.ObjectId(req.params.id);
        // const parsedCriticals = JSON.parse(req.body)
        const stringCriticals = JSON.stringify(req.body)

        console.log(req.params.id)
        console.log(req.body)
        db.Patient
        .findByIdAndUpdate({_id:id}, {$set:{criticalWarn: stringCriticals}}, {new:true}, (err, result) => {
            if (err) { console.log(err) }
            else { console.log(result); res.send(result) }
        } )
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