import React, { useState } from "react";
import timer from "../assets/stopwatch.png";
import flame from "../assets/calories.png";
import pasta from "../assets/pasta.jpg";
import like from "../assets/like.png";
import liked from "../assets/liked.png";

const Cards = ({ recipe, openModal, theme }) => {
  const [saved, setSaved] = useState(recipe.saved || false);
  const [isTouch, setIsTouch] = useState(false);

  const saveHandler = () => {
    setSaved(!saved);
    recipe.saved = !saved;
    //console.log("Recipe-name", recipe.name);
    //console.log("Recipe saved status", recipe.saved);
  };

  const handleTouchStart = () => {
    setIsTouch(true); // Set to true when touch starts
  };

  const handleTouchEnd = (e) => {
    if (isTouch) {
      setIsTouch(false); // Reset flag
      return; // Prevent modal from opening when scrolling or tapping
    }
    // Trigger modal open if it's a valid tap
    openModal();
  };

  // To handle double-click (mouse interaction) for the desktop or larger screens:
  const handleDoubleClick = () => {
    openModal();
  };

  return (
    <div
      className={` ${
        theme === "light" ? "bg-white text-gray-900" : "bg-gray-700 text-white"
      } p-2 md:p-3 h-80  md:h-80 md:w-60 lg:h-96 lg:w-64 flex flex-col gap-1 md:gap-2.5   rounded-md md:shadow-md`}
    >
      <p
        title="double click to know more"
        className="ml-1 text-left font-bold font-serif text-lg cursor-pointer"
      >
        {recipe.name}
      </p>
      <img
        title="double click to know more"
        src={recipe.imgUrl || pasta}
        onDoubleClick={handleDoubleClick}
        onTouchStart={handleTouchStart} // Detect the start of a touch
        onTouchEnd={handleTouchEnd} // Handle touch end
        alt="recipe-image"
        className="h-2/3 md:h-1/2  object-cover cursor-pointer rounded-md"
      />
      <div className="ml-1 flex flex-col gap-1 md:gap-2">
        <div className="flex flex-row items-center gap-4">
          <div
            title="Estimated time to cook"
            className="flex flex-row items-center gap-1"
          >
            <img src={timer} alt="timer-icon" className="w-4 h-4" />
            <p className="text-sm">{recipe.estimatedTime} min</p>
          </div>
          <div
            title="Estimated calorie count"
            className="flex flex-row items-center gap-1"
          >
            <img src={flame} alt="flame-icon" className="w-4 h-4" />
            <p className="text-sm">{recipe.calories} cal</p>
          </div>
          <button
            title="click to save the recipe"
            onClick={saveHandler}
            className="ml-auto px-2 py-1"
          >
            <img
              src={recipe.saved === true ? liked : like}
              alt="like_icon"
              className="w-4 h-4"
            />
          </button>
        </div>
        <p
          title="decription of the recipe"
          className="overflow-hidden text-sm line-clamp-2 md:line-clamp-3 lg:line-clamp-5"
        >
          {recipe.howToMake}
        </p>
      </div>
    </div>
  );
};

export default Cards;
