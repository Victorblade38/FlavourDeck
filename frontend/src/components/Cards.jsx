import React from "react";
import timer from "../assets/stopwatch.png";
import flame from "../assets/calories.png";
import pasta from "../assets/pasta.jpg";

const Cards = ({ recipe, onCookClick }) => {
  return (
    <div className="w-[170px] h-[240px] lg:w-[400px] lg:h-[250px] flex flex-col lg:flex-row p-2 gap-1 lg:gap-0 bg-white rounded-2xl md:shadow-xl">
      <img
        src={pasta}
        alt=""
        className="h-1/2 lg:w-1/2 lg:h-full object-cover rounded-2xl"
      />
      <div className="h-1/2 lg:w-1/2 flex flex-col px-1 lg:p-3">
        <p className="h-14 text-sm lg:text-lg font-bold font-serif">
          {recipe.name}
        </p>
        <div className="h-12 flex flex-row gap-3">
          <div className="flex flex-row items-center gap-1 lg:gap-2">
            <img
              src={timer}
              alt="Timer Icon"
              className="w-3 h-3 lg:w-4 lg:h-4"
            />
            <p className="text-[12px] lg:text-[14px] font-medium">
              {recipe.estimatedTime}
            </p>
          </div>
          <div className="flex flex-row items-center gap-1 lg:gap-2">
            <img
              src={flame}
              alt="Calories Icon"
              className="w-3 h-3 lg:w-4 lg:h-4"
            />
            <p className="text-[12px] lg:text-[14px] font-medium">
              {recipe.calories}
            </p>
          </div>
        </div>
        <div className="h-24">
          <p className="hidden overflow-clip lg:flex lg:h-[85px]  row-span-2 text-[13px] text-slate-400">
            {recipe.howToMake}
          </p>
        </div>
        <button
          className="bottom-0 p-1 text-sm lg:text-lg bg-orange-400 hover:bg-orange-500 active:bg-orange-700 text-white font-semibold rounded-md"
          onClick={() => onCookClick(recipe)}
        >
          Cook
        </button>
      </div>
    </div>
  );
};

export default Cards;
