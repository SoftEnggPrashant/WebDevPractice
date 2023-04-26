import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchProductStart: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchProductSuccess: (state, action) => {
      console.log("action",action);
      state.isLoading = false;
      state.products = action.payload;
    },
    fetchProductFail: (state, action) => {
      state.error = action.payload;
      state.products = null;
      state.isLoading = false;
    },
  },
});

export const {fetchProductFail,fetchProductSuccess,fetchProductStart }  = productSlice.actions;
export default productSlice.reducer;
