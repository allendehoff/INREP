import axios from "axios"

export default {
    createUser: function(userData) {
        return axios.post("/api/user/signup", userData)
    },

    findUser: function(loginCredentials) {
        // console.log(loginCredentials)
        return axios.get("/api/user/login", loginCredentials)
    },

    createPatient: function (PtInitInfo) {
        return axios.post("/api/patients/new", PtInitInfo)
    },

    findById: function(id) {
        // console.log(id)
        // let idString = id.toString()
        return axios.get("/api/patients/" + id)
        // return axios.get("/api/patients/id", {params: {id}})
    },

    updateById: function(id, update) {
        // console.log("here")
        return axios.put("/api/patients/"+ id, update)
    }

    // findMostRecentPatient: function () {
    //     return axios.get("/api/patients/recent")
        
    // }
}