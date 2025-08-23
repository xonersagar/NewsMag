import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=b16702751c0143c8839fc76435074a7b`;


    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles || []))
      .catch((err) => console.error("Error fetching news:", err));
  }, [category]); // re-run when category changes

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4 text-capitalize">
        {category} <span className="badge bg-danger">News</span>
      </h2>
      <div className="d-flex flex-wrap gap-3 justify-content-center">
        {articles.length > 0 ? (
          articles.map((news, index) => (
            <NewsItem
              key={index}
              title={news.title || "No Title"}
              description={news.description || "No description available."}
              src={news.urlToImage}
              url={news.url}
            />
          ))
        ) : (
          <p className="text-center">No articles found.</p>
        )}
      </div>
    </div>
  );
};

export default NewsBoard;
