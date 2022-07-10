import React from "react";
import "./numPostsFilter.components.scss";

interface Props {
  setNumPostsUnput: React.Dispatch<React.SetStateAction<string>>,
  numPostsUnput: string,
  setNumPosts: React.Dispatch<React.SetStateAction<number>>,
  setPage: React.Dispatch<React.SetStateAction<number>>,
}

export const NumPostsFilter = (props: Props) => {
  return (
    <div className="numPostsFilter">
      <input
        className="numPostsFilter__input"
        placeholder="кол-во записей"
        type="number"
        min={0}
        onChange={e => {
          props.setNumPostsUnput(e.target.value);
        }}
        value={props.numPostsUnput}
      />
      <button
        className="numPostsFilter__applyButton"
        onClick={() => {
          props.numPostsUnput !== "" ?
            props.numPostsUnput !== "0"
              ? localStorage.setItem("numPosts", props.numPostsUnput)
              : null
            : null
          props.setNumPosts(Number(props.numPostsUnput));
          props.setPage(1);
        }}
      >
        Применить
      </button>
    </div>
  )
}
