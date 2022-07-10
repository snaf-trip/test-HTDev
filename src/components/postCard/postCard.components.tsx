import React from "react";
import "./postCard.components.scss";
import { Note } from "../../interfaces";
import { Link } from "react-router-dom";

interface Props {
  post: Note,
}

export const PostCard = (props: Props): JSX.Element => {
  return (
    <a className="postCard">
      <div className="postCard__container">
        <p className="postCard__singAuthor">{props.post.sign}</p>
        <h3 className="postCard__title">{props.post.text}</h3>
        <p className="postCard__time">{props.post.date.datetime}</p>
      </div>
    </a>
  )
}
