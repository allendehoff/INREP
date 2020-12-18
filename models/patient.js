const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patientSchema = new Schema({
    respondingUnit: { type: String, required: false },
    ETA: { type: String, },
    // type: { type: String, required: true },
    criticalWarn: { any:Object, required: false },
    patientInformation: {any:Object, required:false},
    vitals: { type: Array }
},
    { timestamps: true });

const Patient = mongoose.model("Patient", patientSchema);

// const vitalsSchema = new Schema({
//     HR: {type:Number},
//     RR: {type:Number},
//     BPsys:{type:Number},
//     BPdi
// })

module.exports = Patient;