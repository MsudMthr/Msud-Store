const initialState = {
  searchText: "",
  category: "",
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        searchText: action.payload,
      };
    case "CATEGORY":
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;
