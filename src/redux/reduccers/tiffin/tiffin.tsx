import { Action } from "redux";
import Tiffin from "./TiffenInterface";

const initialState: Tiffin[] = [];
export default (state = initialState, action: Action): Tiffin[] => {
  switch (action.type) {
    default:
      return state;
  }
};
