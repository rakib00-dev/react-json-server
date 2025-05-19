import { useEffect, useState } from 'react';

// components
import TakeInput from './components/TakeInput';
import AddData from './components/AddData';

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
      <AddData data={data} />
    </div>
  );
}

export default App;
