import { createContext, useReducer, useContext } from "react";
import GithubContext from "../github/GithubContext";
import paginationReducer from "./PaginationReducer";

const PaginationContext = createContext();

export const PaginationProvider = ({ children }) => {
  const initlalState = {
    page: 1,
  };
  const [state, dispatch] = useReducer(paginationReducer, initlalState);
  const { searchUsers, search, totalCount } = useContext(GithubContext);
  const totalPages = Math.round(totalCount / 30);

  const incrementPageCount = () => {
    if (totalPages > 5) {
      if (state.page === 5) {
        return;
      } else {
        if (state.page === totalPages) {
          return;
        } else {
          dispatch({
            type: "INCREMENT_COUNT",
          });

          searchUsers(search, state.page + 1);
        }
      }
    } else {
      if (state.page === totalPages) {
        return;
      } else {
        dispatch({
          type: "INCREMENT_COUNT",
        });

        searchUsers(search, state.page + 1);
      }
    }
  };

  const decrementPageCount = () => {
    if (state.page === 1) {
      return;
    } else {
      dispatch({
        type: "DECREMENT_COUNT",
      });
      searchUsers(search, state.page - 1);
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
