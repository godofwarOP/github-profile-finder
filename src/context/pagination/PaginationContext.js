import { createContext, useReducer, useContext } from "react";
import GithubContext from "../github/GithubContext";
import paginationReducer from "./PaginationReducer";
import { searchUsers } from "../github/GithubActions";

const PaginationContext = createContext();

export const PaginationProvider = ({ children }) => {
  const initlalState = {
    page: 1,
  };
  const [state, paginationDispatch] = useReducer(
    paginationReducer,
    initlalState
  );
  const { search, dispatch } = useContext(GithubContext);

  const incrementPageCount = async () => {
    if (state.page === 5) {
      return;
    } else {
      paginationDispatch({
        type: "INCREMENT_COUNT",
      });

      const users = await searchUsers(search, state.page + 1);
      dispatch({
        type: "GET_USERS",
        payload: {
          items: users.items,
          search: search,
          total_count: users.total_count,
        },
      });
    }
  };

  const decrementPageCount = async () => {
    if (state.page === 1) {
      return;
    } else {
      paginationDispatch({
        type: "DECREMENT_COUNT",
      });
      const users = await searchUsers(search, state.page - 1);
      dispatch({
        type: "GET_USERS",
        payload: {
          items: users.items,
          search: search,
          total_count: users.total_count,
        },
      });
    }
  };

  return (
    <PaginationContext.Provider
      value={{
        page: state.page,
        incrementPageCount,
        decrementPageCount,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

export default PaginationContext;
