import { useEffect, useRef, useState } from 'react';

// components
import TakeInput from './components/TakeInput';
import AddData from './components/AddData';

function App() {
  const [data, setData] = useState([]);
  const [changingData, setChangingData] = useState(null);
  const [isEditClicked, setIsEditClicked] = useState(false);

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

  // Bring data's
  const bringData = (blog) => {
    fetch(`http://localhost:8000/blogs/${blog.id}`)
      .then((res) => res.json())
      .then((data) => console.log(data));

    window.scrollTo(0, 0);
    setChangingData(blog);
  };

  // update blogs
  const updateBlog = (blog) => {
    fetch(`http://localhost:8000/blogs/${blog.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(blog),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className=" max-w-5xl mx-auto p-4 m-10 mt-4 grid gap-5">
      <h1 className="text-4xl grid place-items-center">Json-server</h1>
      <TakeInput
        addBlog={addBlog}
        changingData={changingData}
        isEditClicked={isEditClicked}
        setIsEditClicked={setIsEditClicked}
        updateBlog={updateBlog}
      />
      <AddData
        data={data}
        deleteBlog={deleteBlog}
        bringData={bringData}
        setIsEditClicked={setIsEditClicked}
      />
    </div>
  );
}

export default App;
