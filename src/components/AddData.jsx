import React, { useState } from 'react';

const AddData = ({ data, deleteBlog, bringData, setIsEditClicked }) => {
  return (
    <div className="grid gap-5">
      {data.map((e, i) => (
        <div
          className="grid w-11/12 max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100  gap-5"
          key={i}
        >
          <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {e.title}
          </h1>

          <p className="font-normal text-gray-700 dark:text-gray-400">
            {e.content}
          </p>

          <div className="grid">
            <span>{e.author}</span>
            <span>{e.date}</span>
          </div>

          <div className="w-full flex justify-around gap-2">
            <button
              className="transition-all duration-300 w-full rounded-md py-2 px-2 font-bold bg-green-500 text-white cursor-pointer hover:bg-green-200 hover:text-black"
              onClick={() => {
                bringData(e);
                setIsEditClicked(true);
              }}
            >
              Edit
            </button>
            <button
              className="transition-all duration-300 w-full rounded-md py-2 px-2 font-bold bg-red-500 text-white cursor-pointer hover:bg-red-200 hover:text-black"
              onClick={() => deleteBlog(e.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddData;
