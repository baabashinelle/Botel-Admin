import axios from "axios"

const Axios =  axios.create({
    baseURL: "https://ibookings-api.herokuapp.com/",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
    
})

export default Axios;