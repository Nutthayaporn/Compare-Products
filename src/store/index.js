import { createSlice, configureStore } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [
      {
        id: 1,
        imageUrl: "https://placehold.it/720",
        name: "iPhone SE",
        description: "64GB",
        price: 14900,
        colors: [{ code: "blue" }],
      },
      {
        id: 2,
        imageUrl: "https://placehold.it/720",
        name: "iPhone 9",
        description: "64GB",
        price: 13900,
        colors: [{ code: "green" }],
      },
      {
        id: 3,
        imageUrl: "https://placehold.it/720",
        name: "iPhone 8",
        description: "64GB",
        price: 12900,
        colors: [{ code: "red" }],
      },
      {
        id: 4,
        imageUrl: "https://placehold.it/720",
        name: "iPhone 7",
        description: "64GB",
        price: 11900,
        colors: [{ code: "pink" }],
      },
    ],
    selectedProductIds: [],
  },
  reducers: {
    addSelectedProduct(state, action) {
      const id = action.payload;
      state.selectedProductIds.push(id);
    },
    removeSelectedProduct(state, action) {
      const id = action.payload;
      state.selectedProductIds = state.selectedProductIds.filter(
        (selectedProductId) => selectedProductId !== id
      );
    },
  },
});

export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
  },
});

export const {
  addSelectedProduct,
  removeSelectedProduct,
} = productSlice.actions;

export default productSlice.reducer;
