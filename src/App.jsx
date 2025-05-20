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

  // adding blogs
  const addBlog = async (title, author, date, content) => {
    const dataType = {
      id: JSON.stringify(Date.now()),
      title,
      author,
      date,
      content,
    };
    await fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify(dataType),
    });
  };

  // deleting blogs
  const deleteBlog = (id) => {
    console.log('Trying to delete:', id);
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  return (
    <div className="max-w-5xl mx-auto p-4 m-10 mt-4 grid gap-5">
      <TakeInput addBlog={addBlog} />
      <AddData data={data} deleteBlog={deleteBlog} />
    </div>
  );
}

export default App;
