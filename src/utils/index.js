import Axios from "./axios";
/**
 * @param url: string //This is the endpoint of the data you want to fetch
 * @param callback:functionn // This is a function to handle response from the API
 */
export const FETCH_DATA = async (url, callback) => {
  try{
    const { data } = await Axios({
      method: "GET",
      url
    })
    callback(data)
  }catch(err){
    console.log(err)
  }
  
};

export const ADD_HOTEL = async (hotel, callback) => {
  try{
    const { data } = await Axios.post("hotels", hotel);
    callback(data);
    console.log(data)
  }catch(err){
    console.log(err)
  }
};

export const ADD_ROOM = async (room, callback) => {
  try{
    const { data } = await Axios.post("rooms", room);
    callback(data);
  }catch(err){
    console.log(err)
  }
};