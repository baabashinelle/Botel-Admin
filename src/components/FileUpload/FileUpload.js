import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";

const FileUpload = () => {
  const [selectedImage, setSelectedImage] = useState();

  // This function will be triggered when the file field change
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  // This function will be triggered when the "Remove This Image" button is clicked
  const removeSelectedImage = () => {
    setSelectedImage();
  };

  return (
    <>
      <div className="flex flex-col border-2 border-dashed justify-center items-center w-full p-[1.5rem]">
        <div className="flex flex-col items-center relative">
          <span className="relative text-right max-w-[10rem] z-20 cursor-pointer opacity-0">
            <input accept="image/*" type="file" onChange={imageChange} />
          </span>
          <br></br>
          <button className="flex items-center justify-center gap-3 bg-bg-o text-white py-[0.4rem] px-[1rem] mb-2 absolute top-0 cursor-pointer z-10">
            <span>
              <AiFillPlusCircle />
            </span>
            Upload
          </button>

          {selectedImage && (
            <div className="flex flex-col justify-center items-center">
              <img
                src={URL.createObjectURL(selectedImage)}
                alt="Upload Preview"
              />
              <button
                onClick={removeSelectedImage}
                className="bg-bg-o text-white py-[0.4rem] px-[1rem] my-3 min-w-1/3"
              >
                Remove Image
              </button>
            </div>
          )}
        </div>

        <p className="font-bold">Supported files</p>
        <p>JPG, PNG </p>
      </div>
    </>
  );
};

export default FileUpload;
