import React, { useEffect, useState } from "react";
import { FETCH_DATA } from "../utils";
import Login from "../components/Login";
import { RiAdminLine } from "react-icons/ri";
import { useStateValue } from "../context/stateProvider";

const LoginPage = () => {
const [{}, disaptch] = useStateValue()
  useEffect(() => {
    FETCH_DATA('hotels', (data) => {
      //to get actual hotels 
      console.log("hotels", data.data)
      // store it in context state
      disaptch({
        type: "SET_HOTELS", // this is the action type to store hotels in /context/reducer.js 
        hotels: data.data // now set hotels to data.data from the api
      })
    });
    FETCH_DATA('rooms', (data) => {
      //to get actual rooms 
      console.log("rooms", data.data)
            // store it in context state
      disaptch({
        type: "SET_ROOMS", // this is the action type to store rooms in /context/reducer.js 
        rooms: data.data // now set hotels to data.data from the api
      })
    });


    // So in this useEffect Hook, 
    // we have fetched all rooms and hotels and dispatched the data to our context state. It is now avaiilable to use in all compnents without fetching from the API again.
  }, []);
  return (
    <main className="flex flex-col items-center justify-center bg-[#fff4e9] h-screen font-text">
      <RiAdminLine className="text-9xl bg-bg-o rounded-full p-5 text-white mb-[0.4em]" />
      <Login />
    </main>
  );
};

export default LoginPage;
