import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";

const FileUpload = ({ files, setFiles }) => {
  const uploadHandler = () => {};
  return (
    <>
      <div className="flex flex-col border-2 border-dashed justify-center items-center w-full p-[1.5rem]">
        <div className="flex flex-col items-center relative">
          <span className="relative text-right max-w-[10rem] z-20 cursor-pointer opacity-0">
            <input type="file"/>
          </span>
          <br></br>
          <button className="flex items-center justify-center gap-3 bg-bg-o text-white py-[0.4rem] px-[1rem] mb-2 absolute top-0 cursor-pointer z-10">
            <span>
              <AiFillPlusCircle />
            </span>
            Upload
          </button>
        </div>

        <p className="font-bold">Supported files</p>
        <p>JPG, PNG </p>
      </div>
    </>
  );
};

export default FileUpload;
