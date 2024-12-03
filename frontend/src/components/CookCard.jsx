import React from "react";

const CookCard = ({ recipe, onClose, showModal }) => {
  console.log(recipe);
  return (
    <div
      className={`fixed min-h-screen min-w-screen  inset-0 bg-black bg-opacity-50 ${
        showModal ? "flex" : "hidden"
      } items-center justify-center z-50`}
    >
      <div className="w-[300px] bg-white flex flex-col items-center p-6 rounded-lg shadow-lg">
        <button
          className="self-end mb-2 text-red-500 bg-blue-100 "
          onClick={onClose}
        >
          Close
        </button>
        <h1 className="text-xl font-bold">{recipe.name}</h1>
        <section className="text-gray-600 mt-4">
          <h2 className="text-lg font-bold mb-2">Instructions</h2>
          <p>{recipe.howToMake}</p>
        </section>
      </div>
    </div>
  );
};

export default CookCard;
