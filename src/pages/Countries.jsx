import { Link } from "react-router-dom";
import css from "./Countries.module.css";
import { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard/NewsCard";

export default function Countries() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [newsFromCountries, setNewsFromCountries] = useState([]);

  const options = [
    {
      label: "--Select the country to read news--",
      value: "nothing",
    },
    {
      label: "USA",
      value: "us",
    },
    {
      label: "Germany",
      value: "de",
    },
    {
      label: "Ukraine",
      value: "ua",
    },
    {
      label: "France",
      value: "fr",
    },
    {
      label: "Czech Republic",
      value: "cz",
    },
    {
      label: "Canada",
      value: "ca",
    },
    {
      label: "Japan",
      value: "jp",
    },
  ];

  // ================================== fetch ==========================================================
  const fetchNewsFromCountries = () => {
    if (selectedCountry) {
      fetch(
        `https://newsapi.org/v2/top-headlines?country=${selectedCountry}&apiKey=d526f51e3d9a4f0dba138594e06c3b1f`
      )
        .then((response) => response.json())
        .then((data) => {
          const articles = data.articles || [];
          setNewsFromCountries(articles);
        })
        .catch((error) => {
          console.log(error);
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
        Countries
        <div>
          <select onChange={handleSubmit}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
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
