import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

// State interface
export interface SearchState {
  checkIn: string;
  checkOut: string;
  rooms: number;
  adults: number;
  children: number;
}

// Initial values of state
const initialState: SearchState = {
  checkIn: "",
  checkOut: "",
  rooms: 0,
  adults: 0,
  children: 0,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchRooms: (state, action) => {
      state = action.payload;
    },
    resetState: (state) => {
      state = initialState;
    },
  },
  extraReducers: (builder) => {},
});

export const { setSearchRooms, resetState } = searchSlice.actions;

export const searchState = (state: RootState) => state.search;

export default searchSlice.reducer;
