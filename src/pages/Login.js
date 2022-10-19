import React from "react";
import { RiAdminLine } from "react-icons/ri";
import Login from "../components/Login";


const LoginPage = () => {
  return (
    <main className="flex flex-col items-center justify-center bg-[#fff4e9] h-screen font-text">
      <RiAdminLine className="text-9xl bg-bg-o rounded-full p-5 text-white mb-[0.4em]" />
      <Login/>
    </main>
  );
};

export default LoginPage;
