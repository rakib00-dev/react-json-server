import { useEffect, useState } from 'react';

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
    <>
      {data.map((e, i) => (
        <div key={i}>
          <h1>{e.title}</h1>
        </div>
      ))}
    </>
  );
}

export default App;
