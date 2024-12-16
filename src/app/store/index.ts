import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import formReducer from "./poslajuProductSlice";
import columnReducer from "./columnSlice";
import {
  zone1formReducer,
  zone2formReducer,
  zone3formReducer,
  zone4formReducer,
  zone5formReducer,
} from "./zoneFormSlices";

import zonesColumnSlice from "./zonesColumnSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "poslajuProduct",
    "columns",
    "zone1Slice",
    "zone1",
    "zone2",
    "zone3",
    "zone4",
    "zone5",
    "zonesColumns",
  ],
};

const rootReducer = combineReducers({
  poslajuProduct: formReducer,
  columns: columnReducer,
  zone1: zone1formReducer,
  zone2: zone2formReducer,
  zone3: zone3formReducer,
  zone4: zone4formReducer,
  zone5: zone5formReducer,
  zonesColumns: zonesColumnSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
