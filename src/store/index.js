import { createSlice, configureStore } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [
      {
        id: 1,
        imageUrl:
          "https://s.yimg.com/ny/api/res/1.2/zjyPUVv8tJNbzlJVU.GFZQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9NzExO2g9ODAw/https://media.zenfs.com/en-GB/reuters.com/fd5c12aee3983440011c377249626f40",
        name: "iPhone SE",
        description: "64GB",
        price: 14900,
        colors: [{ code: "#B5052B" }, { code: "#FAFAFA" }, { code: "#1A1A1C" }],
      },
      {
        id: 2,
        imageUrl: "https://www.thairath.co.th/media/dFQROr7oWzulq5FZXUZ0OXzgdKnlLDf4ciZpNudatcccbCzAQiOf5HXJkwN3EiIWPwe.webp",
        name: "iPhone 9",
        description: "128GB",
        price: 13900,
        colors: [{ code: "#F14250" }, { code: "#FAF05D" }, { code: "#C6E2EF" }],
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
        description: "32GB",
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
