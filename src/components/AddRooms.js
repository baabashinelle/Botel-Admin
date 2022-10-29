import React, { useState } from "react";
import { ADD_ROOM } from "../utils";
import Dashboard from "../components/Dashboard";
import { useStateValue } from "../context/stateProvider";
import FileUpload from "./FileUpload/FileUpload";
import StatusSelect from "./StatusSelect";
import { uploadImage } from "../firebase";
import HotelSelector from "./HotelSelector";
import { toast } from "react-toastify";

const AddRooms = () => {
  const [{hotels}, dispatch] = useStateValue();

  const handleChange = (e) => {
    const newRoom = { ...room, [e.target.name]: e.target.value };
    setRoom(newRoom);
    console.log(newRoom);
  };
  const [room, setRoom] = useState({
    hotel: hotels[0]._id,
    price: 0,
    desc: "",
    image: null,
    maxPeople: 0,
    roomNumber: "",
    status: "Available"
  });

  const submitHandler = async() => {
    // Step1: upload image to firebase storage and get the url
    // Step2: Replace the room.image with the url
    // Step3: Send the room object to the backend

    // this function will upload the image to firebase storage and return the url
    // check the /firebase/index.js file for more details
    await uploadImage(room.image, "rooms", async(url) => {
      // Step2: Replace the room.image with the url
      // in this callback function, we will get the url
      // and we will replace the room.image with the url

      // Step3: Send the room object to the backend
      await ADD_ROOM(room, url, (data) => {
        if (data.success) {
          clearForm();

          // dispatch data to context state
          dispatch({
            type: "ADD_ROOM",
            room: data.data,
          });
          toast.success("Room Added Successfully")
        }
      });
    })
  };
  const clearForm = () => {
    setRoom(
      {
        hotel: hotels[0]._id,
        price: 0,
        desc: "",
        image: null,
        maxPeople: 0,
        roomNumber: "",
        status: "Available"
      }
    )
  }
  return (
    <Dashboard>
      <section className="flex flex-col justify-center items-center bg-white font-text px-[2rem] py-[2rem] m-[2rem] rounded-lg">
        <h1 className="text-3xl font-bold pb-2">Add Rooms</h1>
        <p>
          Please fill the form to add hotel rooms. &#40;all fields are
          required&#41;
        </p>
        <article className="flex flex-col gap-[0.1rem] w-1/2 pt-10">
          <label className="pb-2">Select Hotel</label>
          <HotelSelector data={room} setData={setRoom} />
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
            <StatusSelect data={room} setData={setRoom} />
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
            <FileUpload data={room} setData={setRoom} />
          </article>
          <button
            className="bg-bg-o text-white py-[0.7rem] mt-8"
            onClick={submitHandler}
            type="button"
          >
            Add Room
          </button>
        </article>
      </section>
    </Dashboard>
  );
};

export default AddRooms;
