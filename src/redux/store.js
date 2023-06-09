import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootreducer";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";

// const persistConfig = {
//   key: "persist-key",
//   storage,
// };

// const persistReducers = persistReducer(persistConfig, rootReducer);

const store = createStore(rootReducer, composeWithDevTools());

// export const persistor = persistStore(store);
export default store;
