import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Set_tiffens } from "../redux/actions/constants/actions";
const useServerData = (time: number) => {
  const [refresher, setRefresher] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get(`https://mapstreak-backend.herokuapp.com/menu`).then((res) =>
      dispatch({
        type: Set_tiffens,
        payload: {
          data: res.data.data.map((data: any) => ({
            ...data,
            isInCart: false,
          })),
        },
      })
    );
  }, [refresher]);
  return {
    refresh: () => setRefresher(!false),
  };
};

export default useServerData;
