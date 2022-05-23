import React, { useReducer, createContext } from "react";

const initialState = {
  selectedItems: [],
  favorite: [],
  itemCounter: 0,
  total: 0,
  checkOut: false,
};

const sumItems = (state) => {
  const itemCounter = state.reduce((total, item) => total + item.quantity, 0);
  const total = state.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
  return { total, itemCounter };
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        selectedItems: [...state.selectedItems],
        ...sumItems(state.selectedItems),
      };
    case "REMOVE_ITEM":
      const newSelectedItem = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedItems: [...newSelectedItem],
        ...sumItems(newSelectedItem),
      };
    case "INCREASE":
      const indexI = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexI].quantity++;
      return {
        ...state,
        ...sumItems(state.selectedItems),
      };

    case "DECREASE":
      const indexD = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexD].quantity--;
      return {
        ...state,
        ...sumItems(state.selectedItems),
      };

    case "CHECKOUT":
      return {
        selectedItems: [],
        itemCounter: 0,
        total: 0,
        checkOut: true,
      };
    case "CLEAR":
      return {
        selectedItems: [],
        itemCounter: 0,
        total: 0,
        checkOut: false,
      };
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
export const cartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
