import React, { useEffect, useState } from "react";

import { FETCH_HOTELS } from "../utils";
import Login from "../components/Login";
import { RiAdminLine } from "react-icons/ri";
import { useStateValue } from "../context/stateProvider";

const LoginPage = () => {

  useEffect(() => {
    FETCH_HOTELS((data) => {
      console.log(data)

    });
  }, []);
  return (
    <main className="flex flex-col items-center justify-center bg-[#fff4e9] h-screen font-text">
      {/* <div>
        {hotel.map((item, index) =>(
          <h1>{item.country}</h1>
        ))}
        <input
          type="text"
          placeholder="hotel"
          value={data.hotelName}
          name={"hotelName"}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="country"
          value={data.country}
          name={"country"}
          onChange={handleChange}
        />
        <select
          value={data.roomStatus}
          name={"roomStatus"}
          onChange={handleChange}
        >
          <option value={true}>Available</option>
          <option value={false}>Unavailable</option>
        </select>
        <input
          type="text"
          placeholder="description"
          value={data.roomDescription}
          name={"roomDescription"}
          onChange={handleChange}
        />
        <button onClick={addHotels}>{loading ? "loading..." : "submit"}</button>
      </div> */}
      <RiAdminLine className="text-9xl bg-bg-o rounded-full p-5 text-white mb-[0.4em]" />
      <Login />
    </main>
  );
};

export default LoginPage;
