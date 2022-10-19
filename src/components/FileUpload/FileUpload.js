import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";

const FileUpload = () => {
  const uploadHandler = () => {};
  return (
    <>
      <div className="flex flex-col border-2 border-dashed p-[5rem]">
        <div>
          <input type="file" />
          <br></br>
          <button>
            <span>
              <AiFillPlusCircle />
            </span>
            Upload
          </button>
        </div>

        <p>Supported files</p>
        <p>JPG, PNG </p>
      </div>
    </>
  );
};

export default FileUpload;
