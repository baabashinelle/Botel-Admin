import React from "react";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <form className="w-[22em] justify-center flex flex-col">
      <input
        className="h-[3em] px-[1em] border-none focus:outline-bg-o"
        placeholder="USERNAME"
        type="text"
      ></input>
      <br></br>
      <input
        type="password"
        className="h-[3em] px-[1em] focus:outline-bg-o"
        placeholder="PASSWORD"
      ></input>
      <br></br>
      <button
        className="my-[0.5em] bg-bg-o px-[1em] py-[0.6em] text-white flex items-center justify-center gap-x-3"
        type="submit"
      >
        <Link to='/dashboard'>LOGIN</Link>
      </button>
      <p className="text-right text-gray-500 underline">Forgot password?</p>
    </form>
  );
};

export default Login;
