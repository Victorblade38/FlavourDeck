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
    <div className="h-screen flex flex-col gap-10 justify-center items-center bg-gradient-to-br from-orange-400 to-orange-700">
      <div className="glass-effect p-20">
        <div className="flex flex-row justify-center mb-8">
          <form
            className="flex flex-row"
            onSubmit={onSubmitHandler}
            id="search-form"
          >
            <input
              type="text"
              name="input"
              placeholder="search"
              className="w-96 focus:outline-none p-3 placeholder:text-white rounded-md shadow-md"
              disabled
            />
            <button
              className="bg-slate-100 px-4 ml-2 rounded-md shadow-md"
              disabled
            >
              <img src={search} width={20} alt="Search" />
            </button>
          </form>
          <button
            className="bg-white px-4 ml-2 rounded-md shadow-md"
            onClick={toggleShowSaved}
          >
            <img src={bookmark} width={20} alt="Bookmark" />
          </button>
        </div>
        {loading ? (
          <p className="text-white">Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div
            style={{
              height: "640px",
              scrollbarWidth: "none", // For Firefox
              msOverflowStyle: "none", // For IE and Edge
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto"
          >
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
