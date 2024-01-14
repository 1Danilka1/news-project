import { Link } from "react-router-dom";
import css from "./Countries.module.css";
import { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard/NewsCard";

export default function Countries() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [newsFromCountries, setNewsFromCountries] = useState([]);

  const fetchNewsFromCountries = () => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=d526f51e3d9a4f0dba138594e06c3b1f`
    )
    
      .then((response) => response.json())
      .then((data) => {
        const articles = data.articles || [];
        setNewsFromCountries(articles);
      })
      .catch((error) => {
        console.log(error);
      })
  };

  useEffect(() => {
    fetchNewsFromCountries();
  }, [])

  const hadleChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  console.log(selectedCountry);

  return (
    <div className={css.container}>
      <main className={css.main}>
        Countries
        <div>
          <select
            name="selectCountry"
            value={selectedCountry}
            onChange={hadleChange}
          >
            <option value="USA">USA</option>
            <option value="France">France</option>
            <option value="Spain">Spain</option>
            <option value="Japan">Japan</option>
            <option value="Ukraine">Ukraine</option>
          </select>
        </div>
        <div>
          <ul>
            {newsFromCountries.map((article, index) => (
              <li key={index}>
                <Link
                  to={`/${article.source.id}`}
                  state={{ from: location, article: article }}
                >
                  <NewsCard
                      title={article.title}
                      image={article.urlToImage}
                    />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
