import axios from "axios"

const Axios =  axios.create({
    baseURL: "https://ibookings-api.herokuapp.com/",
    withCredentials: true,    
})

export default Axios;