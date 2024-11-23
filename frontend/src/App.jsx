import search from "./assets/search.png";
import bookmark from "./assets/bookmark.png";
import Cards from "./components/Cards";
import liked from "./assets/liked.png";
import { useState } from "react";
import CookCard from "./components/CookCard";
import recipes from "./components/recipes";

function App() {
  const [data, setData] = useState([]);
  const [savedCards, setSavedCards] = useState([]);
  const [showSaved, setShowSaved] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const query = e.target.input.value;
      console.log(query);
      //const res = await getData(query);
      //const topNews = res["top_news"];
      //const filterNews = topNews.map((item) => item["news"][0]);
      //setData(filterNews);
    } catch (error) {
      setError("Failed to fetch data");
      console.error(error);
    } finally {
      setLoading(false);
    }
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
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const openModal = (recipe) => {
    setSelectedRecipe(recipe);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedRecipe(null);
  };

  return (
    <div className="h-screen w-screen overflow-none flex justify-center items-center md:items-start bg-gray-200">
      <div className="md:p-10 md:mt-20 flex flex-col gap-4">
        <div className="flex flex-row justify-center ">
          <form
            className="flex flex-row gap-2 bg-white rounded-md shadow-md"
            id="search-form"
            onSubmit={onSubmitHandler}
          >
            <input
              type="text"
              name="input"
              placeholder="search"
              className="md:w-64 focus:outline-none p-2 text-sm md:p-3 rounded-md"
            />
            <button className="px-2">
              <img src={search} className="w-[14px] md:w-6" alt="Search" />
            </button>
          </form>
          <button
            className="bg-white px-2 md:px-4 ml-2 rounded-md shadow-md"
            onClick={toggleShowSaved}
          >
            <img src={liked} className="w-[14px] md:w-5" alt="Bookmark" />
          </button>
        </div>
        {loading ? (
          <p className="text-white">Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="h-[500px] lg:h-[800px] xl:h-[530px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-2 overflow-y-scroll no-scrollbar">
            {recipes.map((recipe, index) => (
              <Cards key={index} recipe={recipe} openModal={openModal} />
            ))}
          </div>
        )}
      </div>
      {showModal && <CookCard recipe={selectedRecipe} onClose={closeModal} />}
    </div>
  );
}

export default App;
