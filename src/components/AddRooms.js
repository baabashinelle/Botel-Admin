import React from "react";
import Dashboard from "../components/Dashboard";
import FileUpload from "./FileUpload/FileUpload";
import StatusSelect from "./StatusSelect";

const AddRooms = () => {
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
            name="hotelName"
            onChange={(e) => {
              console.log(e.target.value);
            }}
            className="h-[3rem] px-[1rem] border-none focus:outline-bg-o bg-gray-100"
          ></input>
          <br></br>
          <label className="pb-2">Country</label>
          <input
            type="text"
            className="h-[3rem] px-[1rem] border-none focus:outline-bg-o bg-gray-100"
          ></input>
          <br></br>
          <label className="pb-2">Hotel status</label>
          <div>
            <StatusSelect />
          </div>
          <br></br>
          <label className="pb-2">Room Description</label>
          <textarea className="min-h-[10rem] p-[1rem] border-none focus:outline-bg-o bg-gray-100"></textarea>
          <article className="pt-10">
            <FileUpload />
          </article>
          <button className="bg-bg-o text-white py-[0.7rem] mt-8">
            Add Room
          </button>
        </article>
      </section>
    </Dashboard>
  );
};

export default AddRooms;
