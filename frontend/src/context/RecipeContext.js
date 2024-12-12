import { createContext, useContext } from "react";

export const RecipeContext = createContext({
  recipe: [
    {
      id: 1,
      name: "Spicy Chicken Pasta",
      estimatedTime: 20,
      calories: 400,
      howToMake: "sauté chicken with spices and garlic.",
      imgUrl: null,
      saved: false,
    },
  ],
  addRecipe: (recipe) => {},
  deleteRecipe: (id) => {},
});
