import Axios from "./axios";

export const FETCH_HOTELS = async (callback) => {
    const { data } = await Axios.get("/hotels");
    callback(data);
}

export const FETCH_ROOMS = async (callback) => {}