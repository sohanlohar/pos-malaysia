import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import formReducer from "./poslajuProductSlice";
import columnReducer from "./columnSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["poslajuProduct", "columns"],
};

const rootReducer = combineReducers({
  poslajuProduct: formReducer,
  columns: columnReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
