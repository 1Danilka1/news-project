import PropTypes from "prop-types";
import css from "./NewsCard.module.css";

export default function NewsCard({ title, image }) {
  return (
    <div className={css.container}>
      <div>
        <img className={css.img} src={image} alt="image-of-news" />
      </div>
      <div>
        <h1 className={css.title}>{title}</h1>
      </div>
    </div>
  );
}

NewsCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
};
