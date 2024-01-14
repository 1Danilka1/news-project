import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";
import css from './FetchNews.module.css'

function FetchNews({ news: newsProp }) {
    const location = useLocation();

  return (
    <ul className={css.list_item}>
            {newsProp.map((article, index) => (
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
  )
}

FetchNews.propTypes = {
  news: PropTypes.array,
}

export default FetchNews