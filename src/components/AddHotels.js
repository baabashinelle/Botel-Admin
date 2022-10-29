import React, {useState} from "react";
import { ADD_HOTEL } from "../utils";
import Dashboard from "../components/Dashboard";
import { useStateValue } from "../context/stateProvider";
import FileUpload from "./FileUpload/FileUpload";
import StatusSelect from "./StatusSelect";

const AddHotels = () => {
  const [{}, dispatch] = useStateValue();

  const handleChange = (e) => {
    setHotel({...hotel, [e.target.name]: e.target.value});
    console.log(hotel);
  }
  const [hotel, setHotel] = useState({
    city: "",
    country: "",
    name: "",
    image: "",
    status: "Available",
  });

  const submitHandler = () => {
    ADD_HOTEL(hotel, (data) => {
      if (data.success) {
        dispatch({
          type: "ADD_HOTEL",
          hotel: data.data,
        });
      }
    });
  };
  return (
    <Dashboard>
      <section className="flex flex-col justify-center items-center bg-white font-text px-[2rem] py-[2rem] m-[2rem] rounded-lg">
        <h1 className="text-3xl font-bold pb-2">Add Hotels</h1>
        <p>
          Please fill the form to add hotel rooms. &#40;all fields are
          required&#41;
        </p>
        <article className="flex flex-col gap-[0.1rem] w-1/2 pt-10">
          <label className="pb-2">Name of Hotel</label>
          <input
            type="text"
            value={hotel.name}
            name={"name"}
            onChange={handleChange}
            className="h-[3rem] px-[1rem] border-none focus:outline-bg-o bg-gray-100"
          ></input>
          <br></br>
          <label className="pb-2">Country</label>
          <input
            type="text"
            value={hotel.country}
            name={"country"}
            onChange={handleChange}
            className="h-[3rem] px-[1rem] border-none focus:outline-bg-o bg-gray-100"
          ></input>
          <br></br>
          <label className="pb-2">City</label>
          <input
            type="text"
            value={hotel.city}
            name={"city"}
            onChange={handleChange}
            className="h-[3rem] px-[1rem] border-none focus:outline-bg-o bg-gray-100"
          ></input>
          <br></br>
          <label className="pb-2">Hotel Status</label>
          <div>
            <StatusSelect data={hotel} setData={setHotel} />
          </div>
          <br></br>
          <article className="pt-10">
            <FileUpload data={hotel} setData={setHotel} />
          </article>
          <button
            className="bg-bg-o text-white py-[0.7rem] mt-8"
            onClick={submitHandler}
          >
            Add Hotel
          </button>
        </article>
      </section>
    </Dashboard>
  );
};

export default AddHotels;
