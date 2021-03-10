import { Action } from "redux";
import { Change_Profile_Photo } from "../../actions/constants/actions";
import UserInterface from "./userInterface";

const defaultsProfilePhotos = [
  "https://images.pexels.com/photos/1790393/pexels-photo-1790393.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/3236736/pexels-photo-3236736.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
];

const initialState: UserInterface = {
  email: "",
  jwtToken: "",
  name: "",
  number: "",
  profilePhoto: defaultsProfilePhotos[0],
};

const userReducer = (state = initialState, action: any): UserInterface => {
  switch (action.type) {
    case Change_Profile_Photo: {
      return {
        ...state,
        profilePhoto: action.payload.imageUrl,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
