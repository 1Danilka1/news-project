import { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard/NewsCard";

function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
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
  }, []);

  return (
    <main>
      <h1>News from around the world</h1>

      <p>
        Here you can see and read news from all world. Enjoy!
      </p>

      <ul>
        {news.map((article, index) => (
          <li key={index}>
            <NewsCard
              title={article.title}
              author={article.author}
              about={article.description}
              urlTo={article.url}
              image={article.urlToImage}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Home;

{
  /* <strong>{article.title}</strong>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a> */
}
