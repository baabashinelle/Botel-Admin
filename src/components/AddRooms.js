import React, { useState } from "react";
import { ADD_ROOM } from "../utils";
import Dashboard from "../components/Dashboard";
import { useStateValue } from "../context/stateProvider";
import FileUpload from "./FileUpload/FileUpload";
import StatusSelect from "./StatusSelect";

const AddRooms = () => {
  const [{}, dispatch] = useStateValue();

  const handleChange = (e) => {
    setRoom({ ...room, [e.target.name]: e.target.value });
    console.log(room);
  };
  const [room, setRoom] = useState({
    name: "",
    price: 0,
    desc: "",
    image: "",
    maxPeople: 0,
    status: "",
    roomNumber: "",
  });

  const submitHandler = () => {
    ADD_ROOM(room, (data) => {
      if (data.success) {
        dispatch({
          type: "ADD_ROOM",
          room: data.data,
        });
      }
    });
  };
  return (
    <Dashboard>
      <section className="flex flex-col justify-center items-center bg-white font-text px-[2rem] py-[2rem] m-[2rem] rounded-lg">
        <h1 className="text-3xl font-bold pb-2">Add Rooms</h1>
        <p>
          Please fill the form to add hotel rooms. &#40;all fields are
          required&#41;
        </p>
        <article className="flex flex-col gap-[0.1rem] w-1/2 pt-10">
          <label className="pb-2">Name of Hotel</label>
          <input
            type="text"
            name={"name"}
            value={room.name}
            onChange={handleChange}
            className="h-[3rem] px-[1rem] border-none focus:outline-bg-o bg-gray-100"
          ></input>
          <br></br>
          <label className="pb-2">Room Number</label>
          <input
            type="text"
            name={"roomNumber"}
            value={room.roomNumber}
            onChange={handleChange}
            className="h-[3rem] px-[1rem] border-none focus:outline-bg-o bg-gray-100"
          ></input>
          <br></br>
          <label className="pb-2">Maximum People Room Can Take</label>
          <input
            type="number"
            name={"maxPeople"}
            value={room.maxPeople}
            onChange={handleChange}
            className="h-[3rem] px-[1rem] border-none focus:outline-bg-o bg-gray-100"
          ></input>
          <br></br>
          <label className="pb-2">Price</label>
          <input
            type="number"
            name={"price"}
            value={room.price}
            onChange={handleChange}
            className="h-[3rem] px-[1rem] border-none focus:outline-bg-o bg-gray-100"
          ></input>
          <br></br>
          <label className="pb-2">Hotel Status</label>
          <div>
            <StatusSelect />
          </div>
          <br></br>
          <label className="pb-2">Room Description</label>
          <textarea
            name={"desc"}
            value={room.desc}
            onChange={handleChange}
            className="min-h-[10rem] p-[1rem] border-none focus:outline-bg-o bg-gray-100"
          ></textarea>
          <article className="pt-10">
            <FileUpload />
          </article>
          <button
            className="bg-bg-o text-white py-[0.7rem] mt-8"
            onClick={submitHandler}
          >
            Add Room
          </button>
        </article>
      </section>
    </Dashboard>
  );
};

export default AddRooms;
