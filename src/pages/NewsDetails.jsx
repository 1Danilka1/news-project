import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

export default function NewsDetails() {
  const [article, setArticle] = useState({});
  const { id } = useParams();
  const location = useLocation();
  const BackLink = location.state?. from ?? `/news/${id}`


  
  useEffect(() => {
    const storedArticle = location.state?.article;
    if (storedArticle) {
      setArticle(storedArticle)
    } else {
      fetch(
            `https://newsapi.org/v2/everything?q=${id}&apiKey=d526f51e3d9a4f0dba138594e06c3b1f`
          )
            .then((response) => response.json())
            .then((data) => {
              const articles = data.articles || [];
              setArticle(articles[0]);
              console.log(data);
            })
            .catch((error) => {
              console.log(error);
            });
        }
  }, [id, location.state]);

  return (
    <div>
      <Link to={BackLink}>Back to news</Link>
      <h1>{article.title}</h1>
      <div>
        <img src={article.urlToImage} alt="image-of-news" />
      </div>
    </div>
  );
}







  // const fetchNewsDetails = () => {
  //   fetch(
  //     `https://newsapi.org/v2/everything?q=${encodeURIComponent(index)}&apiKey=d526f51e3d9a4f0dba138594e06c3b1f`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const articles = data.articles || [];
  //       setArticle(articles[0]);
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // useEffect(() => {
  //   fetchNewsDetails();
  // }, [index]);