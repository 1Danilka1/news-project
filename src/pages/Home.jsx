import { useEffect, useState } from "react";

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
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, commodi
        quasi, obcaecati eveniet eum in libero labore animi minus expedita
        doloremque porro tempore fuga velit. Explicabo ipsam vero non a!
      </p>

      <ul>
        {news.map((article, index) => (
          <li key={index}>
            <strong>{article.title}</strong>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;

