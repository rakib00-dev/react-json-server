import React from 'react';

const AddData = ({ data }) => {
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
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>

          <div className="grid">
            <span>{e.author}</span>
            <span>{e.date}</span>
          </div>

          <span className="flex gap-3">
            {e.tags.map((e) => (
              <span className="bg-gray-200 py-1 px-2 rounded-sm">{e}</span>
            ))}
          </span>

          <div className="w-full flex justify-around gap-2">
            <button className="transition-all duration-300 w-full rounded-md py-2 px-2 font-bold bg-green-500 text-white cursor-pointer hover:bg-green-200 hover:text-black">
              Edit
            </button>
            <button className="transition-all duration-300 w-full rounded-md py-2 px-2 font-bold bg-red-500 text-white cursor-pointer hover:bg-red-200 hover:text-black">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddData;
