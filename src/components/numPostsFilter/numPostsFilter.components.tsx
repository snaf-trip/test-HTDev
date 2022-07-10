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
    <div>
      <input
        className="allPosts__numPosts"
        placeholder="кол-во записей"
        type="number"
        onChange={e => {
          props.setNumPostsUnput(e.target.value);
        }}
        value={props.numPostsUnput}
      />
      <button
        onClick={() => {
          localStorage.setItem("numPosts", props.numPostsUnput);
          props.setNumPosts(Number(props.numPostsUnput));
          props.setPage(1);
        }}
      >
        Применить
      </button>
    </div>
  )
}
