import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function NewsDetails() {
  const [news, setNews] = useState([]);
  const { index } = useParams();

const fetchNewsDetails = () => {
  fetch(
    `https://newsapi.org/v2/everything?q=${index}&apiKey=d526f51e3d9a4f0dba138594e06c3b1f`
  )
    .then((responce) => responce.json())
    .then((data) => {
      const articles = data.articles || [];
      setNews(articles);
    })
    .catch((error) => {
      console.log(error);
    });
}
  useEffect(() => {
    fetchNewsDetails(index);
  }, [index]);

  return (
    <div>
        <ul>
          {news.map((article, index) => (
            <li key={index}>
              <p>{article.author}</p>
            </li>
          ))}
        </ul>
    </div>
  )
}
