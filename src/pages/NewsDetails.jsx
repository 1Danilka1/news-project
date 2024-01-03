import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function NewsDetails() {
  const [article, setArticle] = useState({});
  const { index } = useParams();

  const fetchNewsDetails = () => {
    fetch(
      `https://newsapi.org/v2/everything?q=${encodeURIComponent(index)}&apiKey=d526f51e3d9a4f0dba138594e06c3b1f`
    )
      .then((response) => response.json())
      .then((data) => {
        const articles = data.articles || [];
        setArticle(articles[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchNewsDetails();
  }, [index]);

  return (
    <div>
      <p>{article.author}</p>
      <p>{article.title}</p>
      <p>{article.description}</p>
      {/* Render other details as needed */}
    </div>
  );
}

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// export default function NewsDetails() {
//   const [news, setNews] = useState([]);
//   const { index } = useParams();

// const fetchNewsDetails = () => {
//   fetch(
//     `https://newsapi.org/v2/everything?q=${index}&apiKey=d526f51e3d9a4f0dba138594e06c3b1f`
//   )
//     .then((responce) => responce.json())
//     .then((data) => {
//       const articles = data.articles || [];
//       setNews(articles);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }
//   useEffect(() => {
//     fetchNewsDetails(index);
//   }, [index]);

//   return (
//     <div>
//         <ul>
//           {news.map((article, index) => (
//             <li key={index}>
//               <h1>{article.author}</h1>
//               <img src={article.urlToImage} alt="" />
//             </li>
//           ))}
//         </ul>
//     </div>
//   )
// }
