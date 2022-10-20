import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineEye } from "react-icons/ai";
import { MdOutlineAddBusiness } from "react-icons/md";
// import { FiLogOut } from "react-icons/fi";

const SideBar = () => {
  return (
    <section className="w-[20%] min-h-screen flex flex-col items-center font-text p-5 shadow-sm">
      {/*logo*/}
      <article className="flex justify-center items-center gap-2 w-full mb-[6rem]">
        <h3 className="text-2xl font-bold font-header">
          <Link to="/">Botel</Link>
        </h3>
        <div>
          <img src={logo} alt="Botel Logo" />
        </div>
      </article>
      <article>
        <ul className="gap-5 flex flex-col text-[#5a3f31] text-lg">
          <li className="bg-[#ffe3d4] px-8 py-2 rounded-md">
            <div className="flex items-center gap-4 cursor-pointer">
              <AiOutlineHome />
          <Link to={"/home"}>Dashboard</Link>
            </div>
          </li>
          <li className="px-8 py-2 rounded-md">
            <div className="flex items-center gap-4 cursor-pointer">
              <AiOutlineEye />
              <Link to={"/viewrooms"}>View Rooms</Link>
            </div>
          </li>
          <li className="px-8 py-2 rounded-md">
            <div className="flex items-center gap-4 cursor-pointer">
              <MdOutlineAddBusiness />
              <Link to={"/addrooms"}>Add Rooms</Link>
            </div>
          </li>
          <li className="px-8 py-2 rounded-md">
            <div className="flex items-center gap-4 cursor-pointer">
              <AiOutlineEye />
              <Link to={"/viewhotels"}>View Hotels</Link>
            </div>
          </li>
          <li className="px-8 py-2 rounded-md">
            <div className="flex items-center gap-4 cursor-pointer">
              <MdOutlineAddBusiness />
              <Link to={"/addhotels"}>Add Hotels</Link>
            </div>
          </li>
        </ul>
      </article>
      {/* <article>
        <button className="bg-primary-o text-white rounded-md px-8 py-2 text-lg">
          <Link to="/" className="flex items-center gap-4">
            <FiLogOut /> Logout
          </Link>
        </button>
      </article> */}
    </section>
  );
};

export default SideBar;