import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "./rootreducer";
import createSagaMiddleware from "@redux-saga/core";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "./userSaga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, logger];

// const composeEnhancers = composeWithDevTools({
//   // Specify options here if needed
// });

const enhancer = compose(
  applyMiddleware(...middlewares),
  composeWithDevTools()
);

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);
export default store;
