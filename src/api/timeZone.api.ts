import React from "react";
import { TimeZones, TimeRes } from "../interfaces";
import { createPost } from "../utils/createPost/createPost.utils";
import { AnyAction, Dispatch } from "redux";

const axios = require("axios");

const url = "https://worldtimeapi.org/api";

export const getTimeZoneRequest = (
  setTimeZones: React.Dispatch<Array<string>>
) => {
  axios.get(`${url}/timezone`)
    .then((response: TimeZones) => {
      setTimeZones(response?.data);
    })
    .catch((error: object) => {
      console.log(error);
    })
}

export const getTimeRequest = (
  timeZone: string,
  text: string,
  sign: string,
  dispatch: Dispatch<AnyAction>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setText: React.Dispatch<React.SetStateAction<string>>,
) => {
  axios.get(url + "/timezone/" + timeZone)
    .then((response: TimeRes) => {
      createPost(timeZone, text, sign, response, dispatch, setLoading, setText);
    })
    .catch((error: object) => {
      dispatch({ type: "OPEN_SNACKBAR", text: "Ошибка: запись не созданна", severity: "error" });
      console.log(error);
      setLoading(false);
    })
}
