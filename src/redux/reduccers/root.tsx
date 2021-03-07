import { combineReducers } from "redux";
import UserReducer from "./user/user";
import TiffinReducer from "./tiffin/tiffin";
export default combineReducers({
  user: UserReducer,
  tiffins: TiffinReducer,
});
