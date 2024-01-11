import { useEffect, useState } from "react";
// import NewsCard from "../components/NewsCard/NewsCard";
import css from "./News.module.css";
// import { Link, useLocation } from "react-router-dom";
import FetchNews from "../components/FetchNews/FetchNews";
import Pagination from "../components/Pagination/Pagination";

function News() {
  const [news, setNews] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

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

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = news.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setcurrentPage(pageNumber);

  return (
    <div className={css.container}>
      <main className={css.main}>
        <h1 className={css.title}>News from around the world</h1>
        <p className={css.text}>
          Here you can see and read news from all world. Enjoy!
        </p>
        <div className={css.container_news}>
          <FetchNews news={currentPost} />
        </div>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={news.length}
          paginate={paginate}
        />
      </main>
    </div>
  );
}

export default News;

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

{
  /* <ul className={css.list_item}>
            {news.map((article, index) => (
              <li key={index}>
                <Link
                  to={`/${article.source.id}`}
                  state={{ from: location, article: article }}
                >
                </Link>
              </li>
            ))}
          </ul> */
}
