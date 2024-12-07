import search_icon from "./assets/search.png";
import Cards from "./components/Cards";
import liked from "./assets/liked.png";
import theme_icon from "./assets/dark-mode.png";
import { useEffect, useState } from "react";
import CookCard from "./components/CookCard";
import recipes from "./components/recipes";

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");
  const [showSaved, setShowSaved] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //console.log(typeof data);

  localStorage.setItem("recipes", JSON.stringify(recipes));

  useEffect(() => {
    const recipeData = localStorage.getItem("recipes");
    if (recipeData) {
      setData(JSON.parse(recipeData));
    }
  }, []);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const searchTerm = search.trim();
    if (searchTerm) {
      const filtered = data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  const [theme, setTheme] = useState("light");

  const toggleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleSaveCard = () => {
    setLoading(true);
    setFilteredData([]);
    if (filteredData.length === 0) {
      setFilteredData(data.filter((item) => item.saved === true));
    } else {
      setFilteredData([]);
    }
    //console.log("Filtering Data response", filteredData);
    setLoading(false);
  };

  // const toggleShowSaved = () => {
  //   setShowSaved(!showSaved);
  // };

  const [showModal, setShowModal] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState({});

  const openModal = (recipe) => {
    console.log("modal clicked");
    setSelectedRecipe(recipe);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedRecipe();
  };

  return (
    <div
      className={`${
        theme === "light" ? "bg-amber-300" : "bg-gray-800"
      } min-h-screen flex justify-center p-2 roboto-medium `}
    >
      <div className="flex flex-col  gap-2 mt-6 md:mt-20 ">
        <div className="w-full flex flex-row justify-center">
          <form
            className=" flex flex-row gap-2 border-[1px] bg-white rounded-md "
            id="search-form"
            onSubmit={onSubmitHandler}
          >
            <input
              type="text"
              name="input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="search"
              className="focus:outline-none p-1 text-[12px] md:text-sm md:p-3 rounded-md"
            />
            <button className="px-2 active:bg-gray-200">
              <img src={search_icon} className="w-[14px] md:w-6" alt="Search" />
            </button>
          </form>
          <button className="bg-white px-2 md:px-4 ml-2 border-[1px] active:bg-gray-200 rounded-md hidden">
            +
          </button>
          <button
            className="bg-white px-2 md:px-4 ml-auto border-[1px] active:bg-gray-200 rounded-md "
            onClick={handleSaveCard}
            title="View saved recipes"
            aria-label="View saved recipes"
          >
            <img src={liked} className="w-[14px] md:w-5" alt="Bookmark" />
          </button>
          <button
            title="Change theme"
            className="bg-white px-2 md:px-4 ml-2 border-[1px] active:bg-gray-200 rounded-md "
            onClick={toggleThemeChange}
          >
            <img src={theme_icon} className="w-[14px] md:w-5" alt="Bookmark" />
          </button>
        </div>
        {loading ? (
          <p className="text-white">Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className=" xl:h-[780px]  grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-2 overflow-y-scroll no-scrollbar">
            {(filteredData.length > 0 ? filteredData : data).map(
              (recipe, index) => (
                <Cards
                  theme={theme}
                  key={index}
                  recipe={recipe}
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
    </div>
  );
}

export default App;
