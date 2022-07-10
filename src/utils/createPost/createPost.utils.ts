import { TimeRes, Note } from "../../interfaces";
import { AnyAction, Dispatch } from "redux";

export const createPost = (
  timeZone: string,
  text: string,
  sign: string,
  response: TimeRes,
  dispatch: Dispatch<AnyAction>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setText: React.Dispatch<React.SetStateAction<string>>,
) => {

  let note: Note = {
    text: text,
    sign: sign,
    tz: timeZone,
    date: response.data,
  };

  if (localStorage.getItem("notes") === null) {
    localStorage.setItem("notes", JSON.stringify([note]));
  } else {
    const notes = JSON.parse(localStorage.getItem("notes"));
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));
  }

  dispatch({ type: "OPEN_SNACKBAR", text: "Запсиь создана" });
  setText("");
  setLoading(false);
}
