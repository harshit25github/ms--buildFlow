import { Action } from "redux";
import UserInterface from "./userInterface";

const initialState: UserInterface = {
  email: "",
  jwtToken: "",
  name: "",
  number: "",
  profilePhoto: "",
};

export default (state = initialState, action: Action): UserInterface => {
  switch (action.type) {
    default:
      return state;
  }
};
