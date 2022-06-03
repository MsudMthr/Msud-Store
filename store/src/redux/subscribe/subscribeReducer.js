const initialState = {
  user: [],
  isLoad: true,
  error: "",
};

const subscribeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SUBSCRIBE_SUCCESS":
      return {
        ...state,
        isLoad: false,
        user: action.payload,
      };
    case "SUBSCRIBE_FAILURE":
      return {
        ...state,
        isLoad: false,
        error: "Please Try Again",
      };
    default:
      return state;
  }
};

export default subscribeReducer;
