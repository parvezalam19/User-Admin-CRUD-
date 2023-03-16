import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootreducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "persist-key",
  storage,
};

const persistReducers = persistReducer(persistConfig, rootReducer);


const store = createStore(persistReducers);

export const persistor = persistStore(store);
export default store;
