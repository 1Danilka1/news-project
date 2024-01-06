import PropTypes from "prop-types";
import css from "./NewsCard.module.css";

export default function NewsCard({ title, author, about, urlTo, image }) {
  return (
    <div className={css.container}>
      <div>
        <img className={css.img} src={image} alt="image-of-news" />
      </div>
      <div>
        <h1 className={css.title}>{title}</h1>
      </div>
        {/* <p className={css.text}>{about}</p>
        <p className={css.text}>Author: {author}</p>
      </div>
      <div>
          <a href={urlTo} target="blank" className={css.link_to_info}>
            Read more
          </a>
      </div> */}
    </div>
  );
}

NewsCard.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  about: PropTypes.string,
  urlTo: PropTypes.string,
  image: PropTypes.string,
};
