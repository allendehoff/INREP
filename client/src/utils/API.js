import axios from "axios"

export default {
    createUser: function(userData) {
        return axios.post("/api/user/signup", userData)
    },

    findUser: function(loginCredentials) {
        // console.log(loginCredentials)
        return axios.get("/api/user/login", loginCredentials)
    },

    foo: function(bar) {
        // console.log(bar)
        return axios.post("/api/user/newroute", bar)
    }
}