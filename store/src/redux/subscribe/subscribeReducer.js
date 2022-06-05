const initialState = {
  user: [],
  isLoad: true,
  isLoggedIn: false,
  error: "",
};

const subscribeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SUBSCRIBE_SUCCESS":
      return {
        ...state,
        isLoad: false,
        user: action.payload,
        isLoggedIn: true,
      };
    case "SUBSCRIBE_FAILURE":
      return {
        ...state,
        isLoad: false,
        error: "Please Try Again",
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default subscribeReducer;
