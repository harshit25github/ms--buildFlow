import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reduccers/root";
const middlewares = [thunk];

export default () => {
  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
};
