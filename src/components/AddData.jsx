import React from 'react';

const AddData = ({ data }) => {
  return (
    <div className="">
      {data.map((e, i) => (
        <div
          className="grid max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 gap-5"
          key={i}
        >
          <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {e.title}
          </h1>

          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
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
