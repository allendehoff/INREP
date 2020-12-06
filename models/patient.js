const { timeStamp } = require("console");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patientSchema = new Schema({
    respondingUnit: { type: String, required: false },
    ETA: { type: String, },
    // type: { type: String, required: true },
    criticalWarn: { type: String, required: false },
    // vitals: { type: String, required: true }
},
{timestamps:true});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;