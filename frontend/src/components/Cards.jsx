import React, { useState } from "react";
import randomImg from "../assets/pasta.jpg";

const Cards = ({
  title = "American election in 12 days ,Trump vs kamala,Who will win ?",
  url,
  urlToImage,
  onSave,
  isSaved,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`w-40 h-52 md:w-56 md:h-56 lg:h-64 relative  bg-black font-sans flex justify-center items-center rounded-md shadow-md`}
    >
      <img
        src={randomImg}
        alt=""
        className="w-full h-full rounded-md opacity-40"
      />
      <div className="flex flex-col  gap-2 absolute p-4">
        <div className="flex flex-col gap-2 text-white">
          <h1 className="text-base md:text-xl  font-bold">
            Spicy Garlic Butter Pasta
          </h1>
          <button className="w-14 md:w-24 text-white text-[10px] md:text-sm  bg-red-600  font-semibold  rounded-sm ">
            Spicy
          </button>
          <p className="flex h-[80px] lg:h-[100px] text-[12px] md:text-sm overflow-y-scroll no-scrollbar">
            Spaghetti or your choice of pasta, Butter, Garlic (minced), Red
            chili flakes,Salt, Black pepper, Parmesan cheese (optional), Fresh
            parsley (optional for garnish)
          </p>
        </div>
        <div className="flex flex-row gap-2 text-[12px] md:text-sm font-semibold justify-between">
          <button className=" bg-red-600 text-white w-full rounded-sm shadow-sm">
            Cook
          </button>
          <button
            className="bg-white text-black active:text-white active:bg-gray-800 w-full  rounded-sm shadow-sm"
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
