import { number } from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

function Pagination({ postsPerPage, totalPosts, paginate }) {
  const [activePage, setactivePage] = useState(1);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePageClick = () => {
    setactivePage(number);
    paginate(number)
  }

  return (
    <div>
      <nav>
        <ul>
          {pageNumbers.map((number) => (
            <li key={number}>
                <Link to={`/news/${number}`} onClick={() => handlePageClick(number)}>{number}</Link>
              {/* <a
                href="!#"
                onClick={() => {
                  handlePageClick(number);
                  paginate = { number };
                }}
              >
                {number}
              </a> */}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
