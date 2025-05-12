import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch("http://localhost:3000/api/products");
    const data = await response.json();
    return data;
  }
);

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (newProduct) => {
    const response = await fetch("http://localhost:3000/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    });
    const data = await response.json();
    return data;
  }
);


export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (productId) => {
    await fetch(`http://localhost:3000/api/products/${productId}`, {
      method: "DELETE",
    });
    return productId; 
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.push(action.payload); 
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        return state.filter((product) => product._id !== action.payload);
      });
  },
});

export default productSlice.reducer;
