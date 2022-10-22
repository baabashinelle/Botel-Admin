import React from 'react'

const DeleteModalDesign = () => {
  return (
    <div className="flex flex-col justify-center px-10 py-10">
      <h3>Are you sure you want to delete?</h3>
      <article className="flex gap-3 justify-center pt-5">
        <button className="bg-green-100 text-green-700 rounded-md px-5 py-2 text-lg">
          Yes
        </button>
        <button className="bg-red-100 text-red-700 rounded-md px-5 py-2 text-lg">
          No
        </button>
      </article>
    </div>
  );
}

export default DeleteModalDesign