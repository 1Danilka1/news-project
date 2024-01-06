import { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard/NewsCard";
import css from "./Home.module.css";
import { Link, useLocation } from "react-router-dom";

function News() {
  const [news, setNews] = useState([]);
  const location = useLocation();

  const fetchNews = () => {
    fetch(
      "https://newsapi.org/v2/everything?q=world&apiKey=d526f51e3d9a4f0dba138594e06c3b1f"
    )
      .then((responce) => responce.json())
      .then((data) => {
        const articles = data.articles || [];
        setNews(articles);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <main>
      <h1 className={css.title}>News from around the world</h1>
      <p className={css.text}>
        Here you can see and read news from all world. Enjoy!
      </p>
      <div className={css.container}>
        <ul className={css.list_item}>
          {news.map((article, index) => (
            <li key={index}>
              <Link to={`/${article.source.id}`} state={{ from: location, article: article }}>
                <NewsCard
                  title={article.title}
                  author={article.author}
                  about={article.description}
                  urlTo={article.url}
                  image={article.urlToImage}
                /> 
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default News;

