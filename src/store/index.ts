import { createStore, applyMiddleware, Store } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import createSagaMiddleware from "redux-saga";

import reducers, { RootState } from "./reducers"; 
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store: Store<RootState> = createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
