import { useEffect, useState } from 'react';

const TakeInput = ({
  addBlog,
  changingData,
  isEditClicked,
  setIsEditClicked,
  updateBlog,
}) => {
  const [isBtnClicked, setIsBtnClicked] = useState(false);

  const [title, setTitle] = useState('');
  const [author, setAuhtor] = useState('');
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!changingData) {
      setIsBtnClicked(true);

      if (isBtnClicked) return;

      addBlog(title, author, date, content);
    }
  };

  useEffect(() => {
    if (changingData) {
      setTitle(changingData.title);
      setAuhtor(changingData.author);
      setDate(changingData.date);
      setContent(changingData.content);
    }
  }, [changingData]);

  // console.log(changingData);

  let refinedData;
  if (changingData) {
    refinedData = {
      id: changingData.id,
      title,
      author,
      date,
      content,
    };
  }

  return (
    <>
      {isEditClicked ? (
        <form
          className="mx-auto w-full grid gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            updateBlog(refinedData);
          }}
        >
          <div className="grid md:grid-cols-2 gap-2">
            <div>
              <label htmlFor="title" className="text-md font-semibold">
                Title
              </label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                id="title"
                className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  outline-none "
                placeholder="Write Blog Title"
                required
              />
            </div>
            <div>
              <label htmlFor="author" className="text-md font-semibold">
                Author
              </label>
              <input
                value={author}
                onChange={(e) => setAuhtor(e.target.value)}
                type="text"
                id="author"
                className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  outline-none "
                placeholder="Author Name"
                required
              />
            </div>
            <div>
              <label htmlFor="date" className="text-md font-semibold">
                Date
              </label>
              <input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                type="text"
                id="date"
                className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  outline-none "
                placeholder="YYYY-MM-DD"
                required
              />
            </div>
            <div>
              <label htmlFor="content" className="text-md font-semibold">
                Content
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                name="content"
                id="content"
                className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none h-13"
                placeholder="Write Your Blog Content"
                required
              ></textarea>
            </div>
          </div>
          <div className="w-full flex justify-end gap-2">
            <button
              className="transition-all duration-300 text-white relative bg-gray-500 hover:bg-gray-300 hover:text-black font-medium rounded-lg text-sm px-6 py-3 cursor-pointer w-fit"
              onClick={() => {
                setIsEditClicked(false);
                window.location.reload();
              }}
            >
              Cancel
            </button>
            <button
              className="transition-all duration-300 text-white relative bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-6 py-3 cursor-pointer w-fit"
              // type="submit"
              onClick={() => console.log(refinedData)}
            >
              Update
            </button>
          </div>
        </form>
      ) : (
        <form className="mx-auto w-full grid gap-2" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-2">
            <div>
              <label htmlFor="title" className="text-md font-semibold">
                Title
              </label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                id="title"
                className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  outline-none "
                placeholder="Write Blog Title"
                required
              />
            </div>
            <div>
              <label htmlFor="author" className="text-md font-semibold">
                Author
              </label>
              <input
                value={author}
                onChange={(e) => setAuhtor(e.target.value)}
                type="text"
                id="author"
                className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  outline-none "
                placeholder="Author Name"
                required
              />
            </div>
            <div>
              <label htmlFor="date" className="text-md font-semibold">
                Date
              </label>
              <input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                type="text"
                id="date"
                className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  outline-none "
                placeholder="YYYY-MM-DD"
                required
              />
            </div>
            <div>
              <label htmlFor="content" className="text-md font-semibold">
                Content
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                name="content"
                id="content"
                className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none h-13"
                placeholder="Write Your Blog Content"
                required
              ></textarea>
            </div>
          </div>
          <div className="w-full flex justify-end gap-2">
            <button
              type="submit"
              className=" text-white relative bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-6 py-3 cursor-pointer w-fit"
              disabled={isBtnClicked}
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default TakeInput;
