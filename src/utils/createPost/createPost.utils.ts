import { TimeRes, Note } from "../../interfaces";

export const createPost = (
  timeZone: string,
  text: string,
  sign: string,
  response: TimeRes
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

  console.log("Post created");
  console.log(note);
}
