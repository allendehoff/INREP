import axios from "axios"

export default {
    // createUser: function(userData) {
    //     return axios.post("/api/user/signup", userData)
    // },

    // findUser: function(loginCredentials) {
    //     // console.log(loginCredentials)
    //     return axios.get("/api/user/login", loginCredentials)
    // },

    createPatient: function (PtInitInfo) {
        // if (navigator.onLine) {
            return axios.post("/api/patients/new", PtInitInfo)
        // } else {console.log("offline here")}
    },

    findById: function(id) {
        // console.log(id)
        // let idString = id.toString()
        return axios.get("/api/patients/" + id)
        // return axios.get("/api/patients/id", {params: {id}})
    },

    updateETA: function (id, time) {
        return axios.put("/api/patients/eta/" + id, time)
    },

    updateVitals: function(id, vitals) {
        // console.log("here")
        return axios.put("/api/patients/vitals/"+ id, vitals)
    },

    updateCriticalWarnings: function(id, criticals) {
        // console.log("here")
        return axios.put("/api/patients/criticals/"+ id, criticals)
    },
    
    updatePtInformation: function (id, information) {
        return axios.put("/api/patients/information/" +id, information)
    },

    findSix: function () {
        return axios.get("/api/patients")
    }

    // findMostRecentPatient: function () {
    //     return axios.get("/api/patients/recent")
        
    // }
}