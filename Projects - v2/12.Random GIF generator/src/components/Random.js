import React from "react";
import Spinner from "./Spinner";
import useGif from "../Hooks/useGif";

const Random = () => {
  const { gif, loading, fetchData } = useGif();

  function clickHandler() {
    fetchData();
  }

  return (
    <div className="bg-gradient-to-r from-green-100 via-green-200 to-green-50 flex flex-col w-[90%] max-w-md mx-auto mb-6 my-10 border border-green-300 rounded-3xl gap-6 p-4 sm:p-6 md:p-8 shadow-md">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-green-700 text-center mt-2 sm:mt-4">
        A Random GIF
      </h2>

      {loading ? (
        <Spinner />
      ) : (
        <img
          src={gif}
          alt="A random gif"
          cclassName="w-[90%] max-w-[450px] mx-auto rounded-md shadow-sm"
        />
      )}

      <button
        onClick={clickHandler}
        className="bg-green-100 text-green-700 font-medium hover:bg-green-200 w-32 sm:w-36 h-10 rounded-full mx-auto shadow-sm transition-colors duration-150"
        aria-label="Generate a random GIF"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
