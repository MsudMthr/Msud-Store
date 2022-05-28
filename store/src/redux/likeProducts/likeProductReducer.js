const initialState = {
  favorite: [],
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LIKE":
      if (!state.favorite.find((item) => item.id === action.payload.id)) {
        state.favorite.push({
          ...action.payload,
          like: true,
        });

        return {
          ...state,
          favorite: [...state.favorite],
        };
      } else {
        const newFavorite = state.favorite.filter(
          (item) => item.id !== action.payload.id
        );

        return {
          ...state,
          favorite: [...newFavorite],
        };
      }

    default:
      return state;
  }
};

export default favoriteReducer;