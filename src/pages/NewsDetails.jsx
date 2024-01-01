import { useEffect, useState } from "react";

export default function NewsDetails() {
  const [news, setNews] = useState([]);


  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=world&apiKey=d526f51e3d9a4f0dba138594e06c3b1f`
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
        <ul></ul>
    </div>
  )
}
