import { Action } from "redux";
import { TiffinService } from "./TiffenInterface";
import { addToCart, Set_tiffens } from "../../actions/constants/actions";

const initialState: TiffinService[] = [];
const TiffenReducer = (state = initialState, action: any): TiffinService[] => {
  switch (action.type) {
    case Set_tiffens: {
      console.log(action.tiffin.data);
      return [...action.tiffin.data];
    }
    // case addToCart: {
    //   return state.map((data) => {
    //     console.log(data);
    //     if (data._id === action.payload.id) return { ...data, isInCart: true };
    //     return data;
    //   });
    // }
    default:
      return state;
  }
};

// function transformTiffinApiResponse(data: any): Tiffin {
//   const toReturn: Tiffin = { tiffinservice: data.tiffinservice };
//   toReturn["pickup"] = { price: "12" };
//   return toReturn;
// }

export default TiffenReducer;
