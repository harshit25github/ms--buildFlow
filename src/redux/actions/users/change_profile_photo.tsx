import { Change_Profile_Photo } from "../constants/actions";
import axios from "axios";
export const change_profile_photo = () => {
  return (dispatch: any) => {
    axios.get("http://localhost:8000/myImage").then(({ data }) => {
      dispatch({
        type: Change_Profile_Photo,
        payload: { imageUrl: data.image_url },
      });
    });
  };
};
export const change_pre_profile_photo = () => {
  return (dispatch: any) => {
    axios.get("http://localhost:8000/myPrevImage").then(({ data }) => {
      dispatch({
        type: Change_Profile_Photo,
        payload: { imageUrl: data.image_url },
      });
    });
  };
};
