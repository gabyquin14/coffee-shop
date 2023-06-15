import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Coffee } from "../types/types";
import axios from "axios";

interface infoState {
  coffees: Coffee[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
interface statusInterface {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: infoState = {
  coffees: [],
  status: "idle",
  error: null,
};

export const fetchCoffees = createAsyncThunk("info/fetchCoffees", async () => {
  const baseUrl = "https://coffee-api-gabyquin14.onrender.com/api/coffees";
  const resp = await axios.get(baseUrl);
  return resp.data;
});

export const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    alphabeticSort: (state) => {
      state.coffees = Array.from(state.coffees).sort((a, b) => {
        return a.name.localeCompare(b.name, "en", { sensitivity: "base" });
      });
    },
    priceLowToHighSort: (state) => {
      state.coffees = state.coffees.sort((a: Coffee, b: Coffee) => {
        const priceA = Number(a.price);
        const priceB = Number(b.price);
        if (priceA < priceB) {
          return -1;
        }
        if (priceA > priceB) {
          return 1;
        }
        return 0;
      });
    },
    priceHighToLowSort: (state) => {
      state.coffees = state.coffees.sort((a: Coffee, b: Coffee) => {
        const priceA = Number(a.price);
        const priceB = Number(b.price);
        if (priceA > priceB) {
          return -1;
        }
        if (priceA < priceB) {
          return 1;
        }
        return 0;
      });
    },
    searchItemByName: (state, action: PayloadAction<Coffee>) => {
      state.coffees = [action.payload];
    },
    changeStatus: (state, action: PayloadAction<statusInterface>) => {
      state.status = action.payload.status;
      state.error = action.payload.error || null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoffees.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCoffees.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.coffees = action.payload;
      })
      .addCase(fetchCoffees.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export const {
  alphabeticSort,
  priceLowToHighSort,
  priceHighToLowSort,
  searchItemByName,
  changeStatus,
} = infoSlice.actions;
export default infoSlice.reducer;
