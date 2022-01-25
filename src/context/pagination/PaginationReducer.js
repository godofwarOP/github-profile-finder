const paginationReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_COUNT":
      return {
        ...state,
        page: state.page + 1,
      };

    case "DECREMENT_COUNT":
      return {
        ...state,
        page: state.page - 1,
      };

    default:
      return state;
  }
};

export default paginationReducer;
