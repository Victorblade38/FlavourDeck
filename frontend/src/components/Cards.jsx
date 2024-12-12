import React, { useState } from "react";

import pasta from "../assets/pasta.jpg";

import { MdTimer } from "react-icons/md";
import { FaFireFlameCurved } from "react-icons/fa6";
import { FaRegHeart, FaHeart, FaTrash } from "react-icons/fa";

const Cards = ({ recipe, openModal, theme, deleteRecipe }) => {
  const [saved, setSaved] = useState(recipe.saved || false);
  const [isTouch, setIsTouch] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const notToDelete = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const saveHandler = () => {
    setSaved(!saved);
    recipe.saved = !saved;
    //console.log("Recipe-name", recipe.name);
    //console.log("Recipe saved status", recipe.saved);
  };

  const handleTouchStart = () => {
    setIsTouch(true); // Set to true when touch starts
  };

  const handleDelete = () => {
    const result = window.confirm(
      "Are you sure you want to delete the recipe?"
    );
    if (result && !notToDelete.includes(recipe.id)) {
      deleteRecipe(recipe.id);
    } else {
      alert("You can only delete recipes you create");
    }
  };

  const handleTouchEnd = (e) => {
    if (isTouch) {
      setIsTouch(false);
      return;
    }
    openModal();
  };

  // To handle double-click (mouse interaction) for the desktop or larger screens:
  const handleDoubleClick = () => {
    openModal();
  };

  return (
    <div
      className={` ${
        theme === "light" ? "bg-white text-gray-900" : "bg-gray-800 text-white"
      } p-2 md:p-3 h-96  md:h-80 md:w-60 lg:h-96 lg:w-64 flex flex-col gap-2 md:gap-2.5   rounded-md md:shadow-mdtransition-opacity duration-500 ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-row items-center">
        <p
          title="double click to know more"
          className="ml-1 roboto-bold   text-lg cursor-pointer "
        >
          {recipe.name}
        </p>
        <button
          onClick={handleDelete}
          title="click to save the recipe"
          className={`${
            notToDelete.includes(recipe.id) ? "hidden" : ""
          } ml-auto px-1 py-1`}
        >
          <FaTrash className="textlg" />
        </button>
      </div>
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
            className=" flex flex-row items-center gap-1"
          >
            <MdTimer className="text-xl" />
            <p className="text-sm pt-0.5">{recipe.estimatedTime} min</p>
          </div>
          <div
            title="Estimated calorie count"
            className="flex flex-row items-center gap-1"
          >
            <FaFireFlameCurved className="text-lg" />
            <p className="text-sm pt-0.5">{recipe.calories} cal</p>
          </div>
          <button
            title="click to save the recipe"
            onClick={saveHandler}
            className="ml-auto px-1 py-1"
          >
            {recipe.saved === true ? (
              <FaHeart className="text-lg text-red-500" />
            ) : (
              <FaRegHeart className="text-lg " />
            )}
          </button>
        </div>
        <p
          title="decription of the recipe"
          className="overflow-hidden 
          hind-mysuru-semibold text-sm line-clamp-2 md:line-clamp-3 lg:line-clamp-5"
        >
          {recipe.howToMake}
        </p>
      </div>
    </div>
  );
};

export default Cards;
