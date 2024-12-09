import React, { useState } from "react";

const defaultRecipe = {
  name: "",
  estimatedTime: Number,
  calories: Number,
  howToMake: "",
  imgUrl: null,
  saved: false,
};

const AddRecipeModal = ({ showAddModal, closeAddModal, addRecipe }) => {
  const [recipe, setRecipe] = useState(defaultRecipe);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!recipe.name.trim() || !recipe.howToMake.trim()) {
      alert("Please fill the required fields");
      return;
    }
    addRecipe({ id: Date.now(), ...recipe });
    setRecipe(defaultRecipe);
    closeAddModal();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "estimatedTime") {
      const min = 2;
      const max = 60;
      const clampedValue = Math.max(min, Math.min(max, Number(value)));
      setRecipe((prevTask) => ({
        ...prevTask,
        [name]: clampedValue,
      }));
    } else if (name === "calories") {
      const min = 100;
      const max = 600;
      const clampedValue = Math.max(min, Math.min(max, Number(value)));
      setRecipe((prevTask) => ({
        ...prevTask,
        [name]: clampedValue,
      }));
    } else {
      setRecipe((prevTask) => ({
        ...prevTask,
        [name]: value,
      }));
    }
  };

  return (
    <div
      className={`fixed min-h-screen min-w-screen  inset-0 bg-black bg-opacity-50 ${
        showAddModal ? "flex" : "hidden"
      } items-center justify-center z-50`}
    >
      <div className="w-[300px] bg-white flex flex-col gap-2 items-center p-4 rounded-lg shadow-lg">
        <h1 className="text-xl font-bold">Add a recipe</h1>
        <form
          className="w-full flex flex-col gap-2  font-normal text-sm
        "
        >
          <input
            onChange={handleChange}
            maxLength={30}
            type="text"
            placeholder="enter recipe name"
            name="name"
            className="focus:outline-none border-2 p-2 rounded-md"
            required
          />
          <input
            onChange={handleChange}
            type="number"
            min={2}
            max={60}
            placeholder="Enter time between 2 to 60"
            name="estimatedTime"
            className="focus:outline-none border-2 p-2 rounded-md"
            required
          />
          <input
            onChange={handleChange}
            min={100}
            max={600}
            type="number"
            placeholder="Enter time between 100 to 600"
            name="calories"
            className="focus:outline-none border-2 p-2 rounded-md"
            required
          />
          <textarea
            onChange={handleChange}
            minLength={20}
            maxLength={200}
            placeholder="How to make"
            name="howToMake"
            className="focus:outline-none border-2 p-2 rounded-md"
            required
          ></textarea>
        </form>
        <div className="flex flex-row gap-2">
          <button
            className="self-end mb-2 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white p-2 rounded-md"
            onClick={closeAddModal}
          >
            Close
          </button>
          <button
            className="self-end mb-2 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white p-2 rounded-md"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddRecipeModal;
