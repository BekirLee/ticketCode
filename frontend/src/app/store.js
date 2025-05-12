import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import authReducer from "../features/auth/authSlice";
// import wishlistReducer from "../features/wishlist/wishlistSlice";
import basketReducer from "../assets/features/basket/Basket";
import productReducer from "../assets/features/products/Products";

const rootReducer = combineReducers({
  //   auth: authReducer,
  //   wishlist: wishlistReducer,
  basket: basketReducer,
  products: productReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["basket"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
