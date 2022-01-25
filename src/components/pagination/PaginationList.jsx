import { useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import PaginationContext from "../../context/pagination/PaginationContext";
import PaginationItem from "./PaginationItem";

function PaginationList() {
  const { incrementPageCount, decrementPageCount } =
    useContext(PaginationContext);
  const { totalCount } = useContext(GithubContext);
  const totalPages = Math.round(totalCount / 10);

  var renderPagination = [];
  for (var i = 1; i <= totalPages; i++) {
    if (i > 5) {
      renderPagination.push(
        <PaginationItem type="disabled" key={totalPages} i={totalPages} />
      );
      break;
    }
    renderPagination.push(<PaginationItem key={i} i={i} />);
  }

  return (
    totalCount > 30 && (
      <ul className="btn-group">
        <li className="btn btn-sm md:btn-md" onClick={decrementPageCount}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </li>
        {renderPagination.map((item) => item)}
        <li className="btn btn-sm md:btn-md" onClick={incrementPageCount}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </li>
      </ul>
    )
  );
}

export default PaginationList;
