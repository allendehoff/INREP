import axios from "axios"

export default {
    createUser: function(userData) {
        return axios.post("/api/user/signup", userData)
    }
}