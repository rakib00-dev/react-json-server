import { useEffect, useState } from 'react';

// components
import TakeInput from './components/TakeInput';
import AddData from './components/AddData';

const postingData = {
  id: 3,
  title: 'Using Framer Motion for Animations',
  author: 'Emily Carter',
  date: '2025-05-18',
  content:
    'Framer Motion is a popular animation library for React. It makes creating complex animations simple and intuitive.',
  tags: ['Animation', 'Framer Motion', 'React'],
  image: 'https://example.com/images/framer-motion.jpg',
};

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
