import React, { useEffect } from "react";
import { RiAdminLine } from "react-icons/ri";
import { FETCH_HOTELS } from "../../util";
import Login from "../components/Login";
import { useStateValue } from "../context/stateProvider";


const LoginPage = () => {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    FETCH_HOTELS((data)=>{
      console.log(data)
      if(data.success)
      {
        dispatch({
          type: "SET_HOTELS",
          hotels: data.data,
        })
      }
    })    

  }, []);
  return (
    <main className="flex flex-col items-center justify-center bg-[#fff4e9] h-screen font-text">
      <RiAdminLine className="text-9xl bg-bg-o rounded-full p-5 text-white mb-[0.4em]" />
      <Login/>
    </main>
  );
};

export default LoginPage;
