// import { number } from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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
        <ul>
          {pageNumbers.map((number) => (
            <li key={number}>
              <Link
                to={"/news"}
                state={{ page: number}}
                onClick={() => handlePageClick(number)}
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
