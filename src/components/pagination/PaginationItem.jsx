import { useContext } from "react";
import PaginationContext from "../../context/pagination/PaginationContext";

function PaginationItem({ i, type }) {
  const { page } = useContext(PaginationContext);

  return (
    <>
      <li
        className={`btn btn-sm md:btn-md ${page === i && "btn-active"} ${
          type && "btn-" + type
        }`}
        key={i}
      >
        {i}
      </li>
    </>
  );
}

export default PaginationItem;
