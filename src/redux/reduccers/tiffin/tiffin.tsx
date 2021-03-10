import { Action } from "redux";
import Tiffin from "./TiffenInterface";
import { addToCart, Set_tiffens } from "../../actions/constants/actions";

const initialState: Tiffin[] = [];
const TiffenReducer = (state = initialState, action: any): Tiffin[] => {
  switch (action.type) {
    case Set_tiffens: {
      return action.payload.data;
    }
    case addToCart: {
      return state.map((data) => {
        if (data._id === action.payload.id) return { ...data, isInCart: true };
        return data;
      });
    }
    default:
      return state;
  }
};
export default TiffenReducer;
