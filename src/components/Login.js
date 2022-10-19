import React from "react";
import { RiAdminLine } from "react-icons/ri";

const Login = () => {
  return (
    <main className="flex flex-col items-center justify-center bg-green-100 h-screen font-text">
      <RiAdminLine className="text-9xl bg-green-400 rounded-full p-5 text-white mb-[0.4em]" />
      <form className="w-[22em] justify-center flex flex-col">
        <input
          className="h-[3em] px-[1em] border-none focus:outline-green-400"
          placeholder="USERNAME"
          type="text"
        ></input>
        <br></br>
        <input
          type="password"
          className="h-[3em] px-[1em] focus:outline-green-400"
          placeholder="PASSWORD"
        ></input>
        <br></br>
        <button
          className="my-[0.5em] bg-green-400 px-[1em] py-[0.6em] text-white flex items-center justify-center gap-x-3"
          type="submit"
        >
          Login
        </button>
        <p className="text-right text-gray-500 underline">Forgot password?</p>
      </form>
    </main>
  );
};

export default Login;
