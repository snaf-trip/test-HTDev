import { AnyAction, Dispatch } from "redux";
import { getTimeRequest } from "../../api/timeZone.api";

export const createPostChecker = (
  timeZone: string,
  text: string,
  sign: string,
  dispatch: Dispatch<AnyAction>,
) => {
  if (timeZone !== undefined) {
    getTimeRequest(timeZone, text, sign, dispatch)
  }
}
