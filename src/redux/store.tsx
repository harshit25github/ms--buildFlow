import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reduccers/root";
const middlewares = [thunk];

const storeCreator = () => {
  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
};
export default storeCreator;
