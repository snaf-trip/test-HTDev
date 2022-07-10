import React from "react";
import "./postCard.components.scss";
import { Note } from "../../interfaces";
import { Link } from "react-router-dom";

interface Props {
  post: Note,
  index: number,
}

export const PostCard = (props: Props): JSX.Element => {
  return (
    <Link className="postCard" to={"/"}>
      <div className="postCard__container">
        <span className="postCard__singAuthor">{props.post.sign}</span>
        <h3 className="postCard__title">{props.post.text}</h3>
        <span className="postCard__time">{props.post.date.datetime}</span>
      </div>
    </Link>
  )
}
