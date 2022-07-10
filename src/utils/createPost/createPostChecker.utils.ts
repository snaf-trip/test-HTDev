import { getTimeRequest } from "../../api/timeZone.api";

export const createPostChecker = (
  timeZone: string,
  text: string,
  sign: string
) => {
  if (timeZone !== undefined) {
    getTimeRequest(timeZone, text, sign)
  }
}
