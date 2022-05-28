const initialState = {
  products: [],
  isLoading: true,
  error: "",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_PRODUCTS_SUCCESS":
      return {
        isLoading: false,
        products: action.payload,
        error: "",
      };
    case "FETCH_PRODUCTS_FAILURE":
      return {
        products: [],
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
