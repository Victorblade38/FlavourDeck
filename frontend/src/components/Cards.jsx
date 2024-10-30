import React from "react";
import randomImg from "../assets/pasta.jpg";

const Cards = ({
  title = "American election in 12 days ,Trump vs kamala,Who will win ?",
  url,
  urlToImage,
  onSave,
  isSaved,
}) => {
  return (
    <div
      style={{ width: "420px", height: "300px" }}
      className="bg-gradient-to-r font-sans from-gray-100 to-white flex flex-row gap-2 p-2 rounded-md shadow-md"
    >
      <img src={randomImg} alt="" className="w-48 rounded-md" />
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2  text-slate-700">
          <h1 className="text-xl mt-2 font-bold">Spicy Garlic Butter Pasta</h1>
          <button className="text-white text-sm bg-red-500  font-bold p-1 rounded-md w-24">
            Spicy
          </button>
          <h1></h1>
          <p
            style={{
              height: "120px",
              scrollbarWidth: "none", // For Firefox
              msOverflowStyle: "none", // For IE and Edge
            }}
            className="text-base overflow-y-auto"
          >
            Spaghetti or your choice of pasta, Butter, Garlic (minced), Red
            chili flakes,Salt, Black pepper, Parmesan cheese (optional), Fresh
            parsley (optional for garnish)
          </p>
        </div>
        <div className="flex flex-row justify-between">
          <button className="bg-blue-600 text-white font-bold px-6 rounded-md shadow-md">
            Make
          </button>
          <button
            className=" text-gray-500 font-bold py-1 px-6 rounded-md border-4 border-gray-500"
            onClick={onSave}
          >
            {isSaved ? "Unsave" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
