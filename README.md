
# FlavourDeck - Food for good mood

Platform for food lovers! Discover mouthwatering recipes from diverse cuisines, follow easy step-by-step instructions, and save your favorites for later. Want to share your own creations? Upload your recipes and inspire others with your culinary skills!

---

## Features ✨

- **Add Recipes**: Easily add your own recipes.
- **Delete Recipes**: Remove recipes you no longer need.
- **Saved Recipes**: Mark recipes as favorites for quick access.
- **Theme Toggle**: Switch between light and dark mode for a personalized experience.
- **Search Option**: Quickly find recipes using the search feature.

---

## Technologies Used 🛠

- **React Vite**: For a fast and modern development environment.
- **JavaScript**: Core language for building interactivity.
- **TailwindCSS**: For beautiful, responsive, and modern styling.
- **React Icons**: For sleek and customizable icons.

---

## Installation 🚀

Follow these steps to set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/recipebook.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd recipebook
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Install React Icons**:

   ```bash
   npm install react-icons
   ```

5. **Install TailwindCSS**:

   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init
   ```

   Configure `tailwind.config.js`:

   ```javascript
   module.exports = {
     content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

   Add Tailwind directives to your CSS file (e.g., `src/index.css`):

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

6. **Start the development server**:
   ```bash
   npm run dev
   ```

---

## Future Updates 🌟

Planned enhancements for the RecipeBook:

- **Backend Integration**: Store user recipes using a backend server.
- **API Integration**: Include more pre-built recipes or fetch recipes using an external API.
- **State Management**: Manage the app state efficiently using Context API or another state management library.
- **Social Features**:
  - Allow users to see recipes from others.
  - Enable user profiles with their uploaded recipes.
  - Add a commenting and liking system for recipes.
- **Enhanced UI**: Include new elements to improve user interaction.
- **More Features**: Continuously add more features to make the app more engaging.

---

## License 📄

This project is licensed under the [MIT License](LICENSE).

---

## Screenshots 📸

Add some screenshots here to showcase the UI and features of your website.
![image](https://github.com/user-attachments/assets/9e704bf4-778f-413b-bc9f-edbf787dad73)
![image](https://github.com/user-attachments/assets/9a8ef133-a694-4abd-af74-9e7e73fc4540)

