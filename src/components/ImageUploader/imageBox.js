/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { MdDeleteForever } from 'react-icons/md';

const ImageBox = ({setImage, imageURI}) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center rounded-lg cursor-pointer border-2 border-dashed p-2 relative">
        <img
          src={imageURI}
          className="w-full h-full object-cover"
          alt='bentil'
        />
      <div onClick={()=> setImage(null)} className="w-10 h-10 flex items-center justify-center bg-red-500 hover:bg-red-600 rounded-full text-white absolute bottom-5 right-5">
        <MdDeleteForever />
      </div>
    </div>
  );
}

export default ImageBox