import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CoffeeCart } from "../types/types";

interface cartState {
  productData: CoffeeCart[];
  userInfo: userInterface | null;
}
export interface userInterface {
  id: string | null;
  name: string | null;
  email: string | null;
  image: string | undefined;
}

const initialState: cartState = {
  productData: [],
  userInfo: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    /*Cart reducers */
    addToCart: (state, action: PayloadAction<CoffeeCart>) => {
      const item = state.productData.find(
        (item) => item.id === action.payload.id
      );

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
    deleteItem: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item.id !== action.payload
      );
    },
    resetCart: (state) => {
      state.productData = [];
    },
    incrementQuantity: (state, action: PayloadAction<CoffeeCart>) => {
      const item = state.productData.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action: PayloadAction<CoffeeCart>) => {
      const item = state.productData.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.quantity--;
      }
    },
    /*User reducers */
    addUser: (state, action: PayloadAction<userInterface>) => {
      state.userInfo = action.payload;
    },
    removeUser: (state) => {
      state.userInfo = null;
    },
  },
});

export const {
  addToCart,
  deleteItem,
  resetCart,
  incrementQuantity,
  decrementQuantity,
  addUser,
  removeUser,
} = cartSlice.actions;
export default cartSlice.reducer;
