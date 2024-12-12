import search_icon from "./assets/search.png";
import Cards from "./components/Cards";
import { useEffect, useState } from "react";
import CookCard from "./components/CookCard";
import { FaHeart } from "react-icons/fa";
import { MdDarkMode, MdLightMode, MdAdd } from "react-icons/md";
import AddRecipeModal from "./components/AddRecipeModal";
import defaultRecipes from "./components/recipes";

function App() {
  const defaultTheme = "light";
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || defaultTheme
  );
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState({});

  //console.log(typeof data);

  const addRecipe = (data) => {
    setData((prev) => [
      {
        id: Date.now(),
        name: data.name,
        estimatedTime: data.estimatedTime,
        calories: data.calories,
        howToMake: data.howToMake,
        imgUrl: null,
        saved: false,
      },
      ...prev,
    ]);
    setShowAddModal(false);
  };

  const deleteRecipe = (id) => {
    setData((prev) => prev.filter((task) => task.id !== id));
    setIsFading(false);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const storedRecipes = localStorage.getItem("recipes");

    if (storedRecipes) {
      setData(JSON.parse(storedRecipes));
    } else {
      setData(defaultRecipes);
      localStorage.setItem("recipes", JSON.stringify(defaultRecipes));
    }
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      localStorage.setItem("recipes", JSON.stringify(data));
    }
  }, [data]);

  useEffect(() => {
    const searchTerm = search.trim();
    if (searchTerm) {
      const filtered = data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData([]);
    }
  }, [data, search]);

  const toggleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleSaveCard = () => {
    // Show only saved recipes dynamically
    if (filteredData.length === 0) {
      setFilteredData(data.filter((item) => item.saved === true));
    } else {
      setFilteredData([]);
    }
  };

  const openModal = (recipe) => {
    console.log("modal clicked");
    setSelectedRecipe(recipe);
    setShowModal(true);
  };

  const closeAddModal = () => {
    setShowAddModal(false);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedRecipe();
  };

  return (
    <div
      className={`${
        theme === "light" ? "bg-amber-300" : "bg-gray-700"
      } min-h-screen flex justify-center p-2 roboto-medium  transition-colors ease-in-out duration-300`}
    >
      <div className="flex flex-col gap-2 mt-6 md:mt-20 ">
        <div className="w-full flex flex-row justify-center gap-2">
          <form
            className=" flex flex-row gap-2 border-[1px] bg-white rounded-md "
            id="search-form"
          >
            <input
              type="text"
              name="input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="search"
              className="focus:outline-none p-2 text-[12px] md:text-sm md:p-3 rounded-md"
            />
            <button
              className="px-2 active:bg-gray-200"
              onClick={(e) => e.preventDefault()}
            >
              <img src={search_icon} className="w-[14px] md:w-6" alt="Search" />
            </button>
          </form>
          <button
            className="bg-white px-2 border-[1px] active:bg-gray-200 rounded-md"
            onClick={() => setShowAddModal(!showAddModal)}
          >
            <MdAdd className="text-xl" />
          </button>
          <button
            className="bg-white px-2 md:px-4border-[1px] active:bg-gray-200 rounded-md "
            onClick={handleSaveCard}
            title="View saved recipes"
            aria-label="View saved recipes"
          >
            <FaHeart className="text-lg text-red-500" />
          </button>
          <button
            title="Change theme"
            className="bg-white px-2  border-[1px] active:bg-gray-200 rounded-md "
            onClick={toggleThemeChange}
          >
            {theme === "light" ? (
              <MdLightMode className="text-2xl" />
            ) : (
              <MdDarkMode className="text-2xl" />
            )}
          </button>
        </div>
        {loading ? (
          <p className="text-white">Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className=" xl:h-[780px]  grid  grid-cols-1 md:grid-cols-3 xl:grid-cols-4  gap-2 overflow-y-scroll no-scrollbar">
            {(filteredData.length > 0 ? filteredData : data).map(
              (recipe, index) => (
                <Cards
                  theme={theme}
                  key={index}
                  recipe={recipe}
                  deleteRecipe={deleteRecipe}
                  openModal={() => openModal(recipe)}
                />
              )
            )}
          </div>
        )}
      </div>
      {showModal && (
        <CookCard
          recipe={selectedRecipe}
          showModal={showModal}
          onClose={closeModal}
        />
      )}
      {showAddModal && (
        <AddRecipeModal
          addRecipe={addRecipe}
          closeAddModal={closeAddModal}
          showAddModal={showAddModal}
        />
      )}
    </div>
  );
}

export default App;
