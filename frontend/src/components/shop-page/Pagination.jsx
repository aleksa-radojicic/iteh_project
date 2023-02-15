import React from "react";
import { usePagination, DOTS } from "../../hooks/usePagination";
import "../../pagination.css";

const Pagination = ({ on_page_change, total_count, current_page, page_size }) => {

  const pagination_range = usePagination({
    current_page,
    total_count,
    page_size,
  });

  // Do not show pagination bar if there is only one page
  if (pagination_range.length < 2) {
    return null;
  }

  const on_next = () => {
    on_page_change(current_page + 1);
  };

  const on_previous = () => {
    on_page_change(current_page - 1);
  };

  let last_page = pagination_range[pagination_range.length - 1];

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination mt-5">
        {pagination_range.map((page_number) => {

          //Show dots (...)
          if (page_number === DOTS) {
            return (
              <li className="page-item">
                <a className="page-link">{DOTS}</a>
              </li>
            );
          }

          //Show page numbers
          return (
            <li
              className="page-item"
              onClick={() => on_page_change(page_number)}
            >
              <a className={"page-link " + (page_number === current_page ? "text-black" : "")}>{page_number}</a>
            </li>
          );
        })}

        {/* Show previous button */}
        <li
          className={
            "page-item " + (current_page === 1 ? "visually-hidden" : "")
          }
          onClick={on_previous}
        >
          <a className="page-link">Previous</a>
        </li>

        {/* Show next button */}
        <li
          className={
            "page-item " + (current_page === last_page ? "visually-hidden" : "")
          }
          onClick={on_next}
        >
          <a className="page-link">Next</a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
