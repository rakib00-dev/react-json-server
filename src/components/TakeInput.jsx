const TakeInput = () => {
  return (
    <form className="mx-auto w-full grid gap-2">
      <div className="grid md:grid-cols-2 gap-2">
        <div>
          <label htmlFor="title" className="text-md font-semibold">
            Title
          </label>
          <input
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
            type="text"
            id="author"
            className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  outline-none "
            placeholder="Author Name"
            required
          />
        </div>
      </div>
      <div className="w-full flex justify-end">
        <button
          type="submit"
          className=" text-white relative bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-4 py-2 cursor-pointer w-fit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default TakeInput;
