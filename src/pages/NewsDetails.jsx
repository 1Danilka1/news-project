import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { SlArrowLeft } from "react-icons/sl";
import css from '../styles/NewsDetails.module.css'

export default function NewsDetails() {
  const [article, setArticle] = useState({});
  const { id } = useParams();
  const location = useLocation();
  const BackLink = location.state?.from ?? `/news/${id}`;

  useEffect(() => {
    const storedArticle = location.state?.article;
    if (storedArticle) {
      setArticle(storedArticle);
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
    <main>
      <div className={css.back_link}>
        <Link to={BackLink}><SlArrowLeft className={css.icon}/><span className={css.link_text}>Back to news</span></Link>
      </div>
      <div className={css.img_container}>
        <img src={article.urlToImage} alt="picture-of-news" className={css.picture} />
      </div>
      <div>
        <h1 className={css.title}>{article.title}</h1>
        <p className={css.author}>Author: {article.author}</p>
        <div className={css.text_container}>
          <p className={css.text}>{article.description}</p>
          <p className={css.text}>{article.content}</p>
          <div className={css.link_container}>
            <a href={article.url} target="blank" className={css.link_to_info}>Read more</a>
          </div>
        </div>
        <p className={css.published}>Published at: {article.publishedAt}</p>
      </div>
    </main>
  );
}