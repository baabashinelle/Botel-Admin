import Axios from "./axios";

export const FETCH_HOTELS = async (callback) => {
  try{
    const { data } = await Axios({
      method: "GET",
      url: "hotels",
    })
    console.log(data)
    callback(data)
  }catch(err){
    console.log(err)
  }
  
};

export const FETCH_ROOMS = async (callback) => {
    const { data } = await Axios.get("rooms");
    callback(data);
};

export const ADD_HOTEL = async (hotel, callback) => {
  const { data } = await Axios.post("hotels", hotel);
  callback(data);
};

export const ADD_ROOM = async (hotel, callback) => {
  const { data } = await Axios.post("rooms", hotel);
  callback(data);
};