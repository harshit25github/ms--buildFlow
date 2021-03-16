import { combineReducers } from "redux";
import UserReducer from "./user/user";
import TiffinReducer from "./tiffin/tiffinReducer";
export default combineReducers({
  user: UserReducer,
  tiffins: TiffinReducer,
});
