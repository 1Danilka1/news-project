import { Link, useLocation } from "react-router-dom";
import css from "../styles/Countries.module.css";
import { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard/NewsCard";
import data from "../data.json";
import { ThreeDots } from "react-loader-spinner";

export default function Countries() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [newsFromCountries, setNewsFromCountries] = useState([]);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  // ================================== fetch ==========================================================
  const fetchNewsFromCountries = () => {
    if (selectedCountry) {
      setIsLoading(true);
      fetch(
        `https://newsapi.org/v2/top-headlines?country=${selectedCountry}&apiKey=d526f51e3d9a4f0dba138594e06c3b1f`
      )
        .then((response) => response.json())
        .then((data) => {
          const articles = data.articles || [];
          setNewsFromCountries(articles);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
    }
  };

  useEffect(() => {
    fetchNewsFromCountries();
  }, [selectedCountry]);
  // ================================================================================================

  function handleSubmit(e) {
    setSelectedCountry(e.target.value);
  }

  return (
    <div className={css.container}>
      <main className={css.main}>
        <h1 className={css.title}>Select country and read the news!</h1>
        <div className={css.container_select}>
          <select onChange={handleSubmit} className={css.select_country}>
            {data.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <div className={css.container_loader}>
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
          </div>
          <ul className={css.news_list}>
            {newsFromCountries.map((article, index) => (
              <li key={index}>
                <Link
                  to={`/${article.source.id}`}
                  state={{ from: location, article: article }}
                >
                  <NewsCard title={article.title} image={article.urlToImage} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
