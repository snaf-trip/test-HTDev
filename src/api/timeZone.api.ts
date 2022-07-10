import React from "react";
import { TimeZones, TimeRes } from "../interfaces";
import { createPost } from "../utils/createPost/createPost.utils";

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
  sign: string
) => {
  axios.get(url + "/timezone/" + timeZone)
    .then((response: TimeRes) => {
      createPost(timeZone, text, sign, response);
    })
    .catch((error: object) => {
      console.log(error);
    })
}
