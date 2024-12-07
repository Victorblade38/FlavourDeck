import React from "react";

const AddRecipeModal = () => {
  return (
    <div>
      <h1>Add Recipe</h1>
      <form>
        <label htmlFor="name">Recipe Name:</label>
        <input type="text" name="name" />
        <label htmlFor="decription">Recipe Description:</label>
        <textarea name="description" id=""></textarea>
        <div>
          <button>submit</button>
          <button>cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeModal;
