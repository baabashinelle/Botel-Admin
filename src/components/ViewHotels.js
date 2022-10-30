import React, { useState } from "react";
import { useStateValue } from "../context/stateProvider";
import Modal from "./Modal";
import ViewModalDesign from "./ViewModalDesign";
import DeleteModalDesign from "./DeleteModalDesign";
import { AiOutlineEye, AiOutlineDelete } from "react-icons/ai";
import Dashboard from "./Dashboard";

const HotelItem = ({ hotelImg, name, country, status, city }) => {
  const [isOpenView, setIsOpenView] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  
  return (
    <article className="flex justify-between items-center py-[1em] border-b-2 ">
      <div className="flex items-center gap-6 w-[20%]">
        <img src={hotelImg} className="w-[5rem] h-[5rem] rounded-md" />
        <div>
          <h3 className="font-bold w-[20ch]">{name}</h3>
          <p className="text-xs text-gray-400">{country}, {city}</p>
        </div>
      </div>
      <div>
        {status == "Available" ? (
          <div className="bg-green-200 text-green-700 py-1 px-3">{status}</div>
        ) : (
          <div className="bg-red-200 text-red-700 py-1 px-3">{status}</div>
        )}
      </div>
      <div className="flex gap-4 cursor-pointer">
        {isOpenView && (
          <Modal
            isOpen={isOpenView}
            handleCloseModal={() => setIsOpenView(false)}
            Design={ViewModalDesign}
          />
        )}
        {isOpenDelete && (
          <Modal
            isOpen={isOpenDelete}
            handleCloseModal={() => setIsOpenDelete(false)}
            Design={DeleteModalDesign}
          />
        )}
        <AiOutlineEye
          onClick={() => setIsOpenView(true)}
          className="hover:text-gray-600 hover:scale-125"
        />
        <AiOutlineDelete
          onClick={() => setIsOpenDelete(true)}
          className="hover:text-gray-600 hover:scale-125"
        />
      </div>
    </article>
  );
};

const ViewHotels = () => {
  const [{ hotels }, dispatch] = useStateValue();
  return (
    <Dashboard>
      <div className="flex flex-col justify-center bg-white font-text px-[2em] py-[1em] m-[2em] rounded-lg">
        <h1 className="border-b-2 font-bold text-lg pb-[0.8em]">All Hotels</h1>
        {hotels.map((hotel, index) => (
          <HotelItem
            hotelImg={hotel.image}
            name={hotel.name}
            country={hotel.country}
            city={hotel.city}
            status={hotel.status}
            key={index}
          />
        ))}
      </div>
    </Dashboard>
  );
};

export default ViewHotels;
