async function getData(query) {
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;
  const url = `https://api.worldnewsapi.com/top-news?&api-key=${apiKey}&source-country=in&language=en&q=${query}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const res = await response.json();
    //console.log(res);
    return res;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

export default getData;
