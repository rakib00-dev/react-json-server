import { useRef, useState } from 'react';

const TakeInput = ({ addBlog, changingData }) => {
  const [isBtnClicked, setIsBtnClicked] = useState(false);

  const titleRef = useRef();
  const authorRef = useRef();
  const dateRef = useRef();
  const contentRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsBtnClicked(true);

    if (isBtnClicked) return;

    addBlog(
      titleRef.current.value,
      authorRef.current.value,
      dateRef.current.value,
      contentRef.current.value
    );
  };

  return (
    <form className="mx-auto w-full grid gap-2" onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 gap-2">
        <div>
          <label htmlFor="title" className="text-md font-semibold">
            Title
          </label>
          <input
            ref={titleRef}
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
            ref={authorRef}
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
            ref={dateRef}
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
            ref={contentRef}
            name="content"
            id="content"
            className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none h-13"
            placeholder="Write Your Blog Content"
            required
          ></textarea>
        </div>
      </div>
      <div className="w-full flex justify-end">
        <button
          type="submit"
          className=" text-white relative bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-6 py-3 cursor-pointer w-fit"
          disabled={isBtnClicked}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default TakeInput;
