import search_icon from "./assets/search.png";
import Cards from "./components/Cards";
import liked from "./assets/liked.png";
import theme_icon from "./assets/dark-mode.png";
import { useEffect, useState } from "react";
import CookCard from "./components/CookCard";
import recipes from "./components/recipes";

function App() {
  const [data, setData] = useState([]);
  const [savedCards, setSavedCards] = useState([]);
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

  const handleSaveCard = (card) => {
    const isSaved = savedCards.some((saved) => saved.url === card.url);
    if (isSaved) {
      setSavedCards(savedCards.filter((saved) => saved.url !== card.url));
    } else {
      setSavedCards([...savedCards, card]);
    }
  };

  const toggleShowSaved = () => {
    setShowSaved(!showSaved);
  };

  const [showModal, setShowModal] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState();

  const openModal = (recipe) => {
    setSelectedRecipe(recipe);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedRecipe();
  };

  return (
    <div className={`bg-[#FFFFE4] min-h-screen flex justify-center p-2`}>
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
          <button
            className="bg-white px-2 md:px-4 ml-2 border-[1px] active:bg-gray-200 rounded-md "
            onClick={toggleShowSaved}
          >
            +
          </button>
          <button
            className="bg-white px-2 md:px-4 ml-auto border-[1px] active:bg-gray-200 rounded-md "
            onClick={toggleShowSaved}
          >
            <img src={liked} className="w-[14px] md:w-5" alt="Bookmark" />
          </button>
          <button
            className="bg-white px-2 md:px-4 ml-2 border-[1px] active:bg-gray-200 rounded-md "
            onClick={toggleShowSaved}
          >
            <img src={theme_icon} className="w-[14px] md:w-5" alt="Bookmark" />
          </button>
        </div>
        {loading ? (
          <p className="text-white">Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className=" lg:h-auto xl:h-[780px]  grid  grid-cols-1 lg:grid-cols-3 xl:grid-cols-4  gap-1 md:gap-2 overflow-y-scroll no-scrollbar">
            {(filteredData.length > 0 ? filteredData : data).map(
              (recipe, index) => (
                <Cards key={index} recipe={recipe} openModal={openModal} />
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
