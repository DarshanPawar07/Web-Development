import React, { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../Hooks/useGif";

const Tag = () => {
  const [tag, setTag] = useState("cat");
  const { gif, loading, fetchData } = useGif(tag);

  function clickHandler() {
    fetchData(tag);
  }

  function changeHandler(event) {
    setTag(event.target.value);
  }

  return (
    <div className="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100 flex flex-col w-full max-w-md mx-auto my-10 border border-gray-400 rounded-3xl gap-6 p-4 sm:p-6 md:p-8 shadow-md">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 text-center">
        A <span className="capitalize">{tag}</span> GIF
      </h2>

      {loading ? (
        <Spinner />
      ) : (
        <img
          src={gif}
          alt={`A gif of ${tag}`}
           className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] mx-auto rounded-md shadow-sm"
        />
      )}

      <div className="flex flex-col items-center space-y-2 w-full max-w-xs sm:max-w-sm mx-auto px-2 sm:px-0">
        <label
          htmlFor="tag-input"
          className="text-sm font-medium text-gray-600 tracking-wide"
        >
          Enter Tag
        </label>
        <input
          id="tag-input"
          type="text"
          className="w-full h-10 px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-800 placeholder-gray-400 shadow-sm
             focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition duration-150 ease-in-out hover:shadow-md text-sm sm:text-base"
          value={tag}
          onChange={changeHandler}
          placeholder="Type a tag..."
          autoComplete="off"
          spellCheck="false"
        />
      </div>

      <button
        className="bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 w-full max-w-[160px] h-10 rounded-full mx-auto shadow-sm transition-colors duration-150"
        onClick={clickHandler}
        aria-label={`Generate a ${tag} GIF`}
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
