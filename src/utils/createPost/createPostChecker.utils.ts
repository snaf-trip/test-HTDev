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
  if (
    timeZone !== undefined &&
    text !== "" &&
    sign !== "" &&
    /\S/.test(text) &&
    /\S/.test(sign)
  ) {
    getTimeRequest(timeZone, text, sign, dispatch, setLoading, setText)
  } else {
    setLoading(false);
    dispatch({ type: "OPEN_SNACKBAR", text: "Вы заполнили не все поля", severity: "error" })
  }
}
