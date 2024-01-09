import { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard/NewsCard";
import css from "./News.module.css";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import UsePaginate from "../hooks/UsePaginate";

function News() {
  const [news, setNews] = useState([]);
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const { data, page, limit, nextPage, prevPage } = UsePaginate(
    "https://newsapi.org/v2/everything?q=world&",
    searchParams
  );

  console.log(data);

  // const fetchNews = () => {
  //   fetch(
  //     "https://newsapi.org/v2/everything?q=world&apiKey=d526f51e3d9a4f0dba138594e06c3b1f"
  //   )
  //     .then((responce) => responce.json())
  //     .then((data) => {
  //       const articles = data.articles || [];
  //       setNews(articles);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // useEffect(() => {
  //   fetchNews();
  // }, []);

  return (
    <div className={css.container}> 
      <main className={css.main}>
        <h1 className={css.title}>News from around the world</h1>
        <p className={css.text}>
          Here you can see and read news from all world. Enjoy!
        </p>
        <div className={css.container}>
          <ul className={css.list_item}>
            {news.map((article, index) => {
              const no = page * limit + index
              return <li key={index}>
                <p>{no}</p>
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
            })}
          </ul>
        </div>
        <div>
          <Link to={`?page=${prevPage}&limit=${limit}`}>Prev page</Link>
          <Link to={`?page=${nextPage}&limit=${limit}`}>Next page</Link>
        </div>
      </main>
    </div>
  );
}

export default News;

// {news.map((article, index) => (
  // <li key={index}>
  //   <Link to={`/${article.source.id}`} state={{ from: location, article: article }}>
  //     <NewsCard
  //       title={article.title}
  //       author={article.author}
  //       about={article.description}
  //       urlTo={article.url}
  //       image={article.urlToImage}
  //     /> 
  //   </Link>
  // </li>
// ))}