import { AnyAction, Dispatch } from "redux";
import { getTimeRequest } from "../../api/timeZone.api";

export const createPostChecker = (
  timeZone: string,
  text: string,
  sign: string,
  dispatch: Dispatch<AnyAction>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setText: React.Dispatch<React.SetStateAction<string>>,
) => {
  if (timeZone !== undefined) {
    getTimeRequest(timeZone, text, sign, dispatch, setLoading, setText)
  } else {
    setLoading(false);
  }
}
