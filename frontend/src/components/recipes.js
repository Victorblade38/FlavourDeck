const recipes = [
  {
    name: "Spicy Chicken Pasta",
    estimatedTime: 20,
    calories: 400,
    ingredients: ["pasta", "chicken", "spices", "garlic", "cream"],
    howToMake:
      "Cook pasta until al dente. In another pan, sauté chicken with spices and garlic. Mix with pasta and cream. Serve hot.",
    type: "non-veg",
    imgUrl: null,
  },
  {
    name: "Vegetable Stir-fry",
    estimatedTime: 15,
    calories: 250,
    ingredients: ["broccoli", "carrot", "bell peppers", "soy sauce", "garlic"],
    howToMake:
      "Heat oil in a wok, add garlic, then vegetables. Stir-fry with soy sauce until tender. Serve with rice.",
    type: "veg",
    imgUrl: null,
  },
  {
    name: "Classic Caesar Salad",
    estimatedTime: 10,
    calories: 150,
    ingredients: ["romaine lettuce", "croutons", "parmesan", "Caesar dressing"],
    howToMake:
      "Toss romaine with Caesar dressing, sprinkle parmesan, and add croutons. Serve immediately.",
    type: "veg",
    imgUrl: null,
  },
  {
    name: "Grilled Salmon",
    estimatedTime: 20,
    calories: 320,
    ingredients: ["salmon", "olive oil", "lemon", "salt", "pepper"],
    howToMake:
      "Brush salmon with olive oil, season with salt and pepper. Grill for 10 minutes each side, then squeeze lemon over it.",
    type: "non-veg",
    imgUrl: null,
  },
  {
    name: "Beef Tacos",
    estimatedTime: 25,
    calories: 500,
    ingredients: ["ground beef", "taco shells", "lettuce", "cheese", "salsa"],
    howToMake:
      "Cook ground beef with spices. Fill taco shells with beef, lettuce, cheese, and salsa. Serve hot.",
    type: "non-veg",
    imgUrl: null,
  },
  {
    name: "Mushroom Risotto",
    estimatedTime: 30,
    calories: 350,
    ingredients: ["rice", "mushrooms", "onion", "chicken broth", "parmesan"],
    howToMake:
      "Sauté onions and mushrooms, then add rice. Gradually add broth while stirring until creamy. Finish with parmesan.",
    type: "veg",
    imgUrl: null,
  },
  {
    name: "Paneer Butter Masala",
    estimatedTime: 30,
    calories: 400,
    ingredients: ["paneer", "tomato puree", "butter", "cream", "spices"],
    howToMake:
      "Cook tomato puree with spices, add butter and cream. Simmer with paneer cubes. Serve with naan or rice.",
    type: "veg",
    imgUrl: null,
  },
  {
    name: "Chicken Biryani",
    estimatedTime: 60,
    calories: 600,
    ingredients: ["chicken", "rice", "yogurt", "spices", "onion"],
    howToMake:
      "Marinate chicken with yogurt and spices. Layer cooked rice with chicken. Steam until aromatic. Serve with raita.",
    type: "non-veg",
    imgUrl: null,
  },
  {
    name: "Vegetable Soup",
    estimatedTime: 20,
    calories: 150,
    ingredients: ["carrots", "celery", "tomatoes", "vegetable stock", "herbs"],
    howToMake:
      "Simmer vegetables in stock with herbs until tender. Blend partially for a thick texture. Serve warm.",
    type: "veg",
    imgUrl: null,
  },
  {
    name: "Pancakes",
    estimatedTime: 15,
    calories: 250,
    ingredients: ["flour", "milk", "eggs", "sugar", "butter"],
    howToMake:
      "Mix flour, milk, eggs, and sugar into a batter. Cook on a greased pan until golden on both sides. Serve with syrup.",
    type: "veg",
    imgUrl: null,
  },
];

export default recipes;
