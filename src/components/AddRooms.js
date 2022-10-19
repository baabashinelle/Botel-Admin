import React, { useState } from "react";
import FileUpload from "./FileUpload/FileUpload";

const AddRooms = () => {

    
  return (
    <section className="flex justify-center items-center gap-10 bg-white font-text px-[2rem] py-[2rem] m-[2rem] rounded-lg">
      <article className="flex flex-col gap-[0.1rem] w-[40%]">
        <input
          type="text"
          placeholder="Name of Hotel"
          name="hotelName"
          onChange={(e) => {console.log(e.target.value)}}
          className="h-[3rem] px-[1rem] border-none focus:outline-bg-o bg-gray-100"
        ></input>
        <br></br>
        <input
          type="text"
          placeholder="Country"
          className="h-[3rem] px-[1rem] border-none focus:outline-bg-o bg-gray-100"
        ></input>
        <br></br>
        <input
          type="text"
          placeholder="Status"
          className="h-[3rem] px-[1rem] border-none focus:outline-bg-o bg-gray-100"
        ></input>
        <br></br>
        <textarea
          placeholder="Description"
          className="min-h-[10rem] p-[1rem] border-none focus:outline-bg-o bg-gray-100"
        ></textarea>
      </article>
      <article>
        <FileUpload />
      </article>
    </section>
  );
};

export default AddRooms;
