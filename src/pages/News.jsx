import { useEffect, useState } from "react";
import css from "../styles/News.module.css";
import FetchNews from "../components/FetchNews/FetchNews";
import Pagination from "../components/Pagination/Pagination";
import { ThreeDots } from "react-loader-spinner";

function News() {
  const [news, setNews] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [postsPerPage] = useState(16);
  const [isLoading, setIsLoading] = useState(false);

  const fetchNews = () => {
    setIsLoading(true);
    fetch(
      "https://newsapi.org/v2/everything?q=world&apiKey=d526f51e3d9a4f0dba138594e06c3b1f"
    )
      .then((responce) => responce.json())
      .then((data) => {
        const articles = data.articles || [];
        setNews(articles);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
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
          {isLoading ? (
            <ThreeDots
              visible={true}
              height="80"
              width="80"
              color="#c41b34"
              radius="9"
              ariaLabel="three-dots-loading"
            />
          ) : null}
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
