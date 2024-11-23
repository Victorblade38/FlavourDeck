import React from "react";

const CookCard = ({ recipe, onClose }) => {
  if (!recipe) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="w-[400px] bg-white flex flex-col items-center p-6 rounded-lg shadow-lg">
        <button className="self-end mb-2 text-red-500" onClick={onClose}>
          Close
        </button>
        <h1 className="text-4xl font-bold">{recipe.name}</h1>
        <p className="text-gray-600">{recipe.description}</p>

        <section className="text-gray-600 mt-4">
          <h2 className="text-2xl font-bold mb-2">Ingredients</h2>
          <ul className="list-disc pl-5">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </section>

        <section className="text-gray-600 mt-4">
          <h2 className="text-2xl font-bold mb-2">Instructions</h2>
          <p>{recipe.howToMake}</p>
        </section>
      </div>
    </div>
  );
};

export default CookCard;
