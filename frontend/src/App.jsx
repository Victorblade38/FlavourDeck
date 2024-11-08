import search from "./assets/search.png";
import bookmark from "./assets/bookmark.png";
import Cards from "./components/Cards";
import { useState } from "react";

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
      const res = await getData(query);
      const topNews = res["top_news"];
      const filterNews = topNews.map((item) => item["news"][0]);
      setData(filterNews);
    } catch (error) {
      setError("Failed to fetch data");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveCard = (card) => {
    // Check if the card is already saved
    const isSaved = savedCards.some((saved) => saved.url === card.url);
    if (isSaved) {
      // If already saved, remove it from the saved list
      setSavedCards(savedCards.filter((saved) => saved.url !== card.url));
    } else {
      // If not saved, add it to the saved list
      setSavedCards([...savedCards, card]);
    }
  };

  const toggleShowSaved = () => {
    setShowSaved(!showSaved);
  };

  return (
    <div className="h-screen w-screen overflow-none flex justify-center items-center md:items-start   bg-gradient-to-br from-orange-400 to-orange-700">
      <div className="md:p-10 md:mt-20 flex flex-col gap-4">
        <div className="flex flex-row justify-center ">
          <form
            className="flex flex-row gap-2"
            onSubmit={onSubmitHandler}
            id="search-form"
          >
            <input
              type="text"
              name="input"
              placeholder="search"
              className="md:w-64 focus:outline-none p-2 text-sm md:p-3 placeholder:text-white rounded-md shadow-md"
              disabled
            />
            <button
              className="bg-slate-100 px-2  rounded-md shadow-md"
              disabled
            >
              <img src={search} className="w-[14px] md:w-6" alt="Search" />
            </button>
          </form>
          <button
            className="bg-white px-2 md:px-4 ml-2 rounded-md shadow-md"
            onClick={toggleShowSaved}
          >
            <img src={bookmark} className="w-[14px] md:w-5" alt="Bookmark" />
          </button>
        </div>
        {loading ? (
          <p className="text-white">Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="h-[450px] md:h-[800px] lg:h-[460px] xl:h-[530px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 overflow-y-scroll no-scrollbar">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
