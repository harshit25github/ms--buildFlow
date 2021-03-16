import axios from "axios";
import { Set_tiffens } from "../constants/actions";

export const addTiffins = () => {
  return (dispatch) => {
    axios
      .get(`https://mapstreak-backend.herokuapp.com/menu`)
      .then((res) => {
        dispatch({ type: Set_tiffens, tiffin: res.data });
      })
      .catch((err) => {
        alert(err.message);
      });
  };
};
