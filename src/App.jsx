import { useEffect, useState } from 'react';

// components
import TakeInput from './TakeInput';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:8000/blogs');
      const resoulve = await res.json();
      setData(resoulve);
    };
    fetchData();
  }, []);

  console.log(data);

  return (
    <div className="m-10 grid gap-5">
      <TakeInput />
      {data.map((e, i) => (
        <div
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          key={i}
        >
          <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {e.title}
          </h1>

          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
