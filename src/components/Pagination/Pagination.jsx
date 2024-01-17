import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import css from "./Pagination.module.css";

function Pagination({ postsPerPage, totalPosts, paginate }) {
  const [activePage, setactivePage] = useState(1);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePageClick = (number) => {
    setactivePage(number);
    paginate(number);
  };

  return (
    <div>
      <nav>
        <ul className={css.pagination_list}>
          {pageNumbers.map((number) => (
            <li key={number} className={css.pagination_item}>
              <Link
                to={`/`}
                state={{ page: number }}
                onClick={() => handlePageClick(number)}
                className={css.pagination_link}
              >
                {number}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

Pagination.propTypes = {
  postsPerPage: PropTypes.number.isRequired,
  totalPosts: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};

export default Pagination;
