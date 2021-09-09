import React from "react";
import s from "./Posts.module.css";

const Posts = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://www.pngitem.com/pimgs/m/553-5533009_feedback-write-post-icon-png-transparent-png.png"
        className={s.post1}
        alt=""
      />
      <span className={s.spans}>{props.messages}</span>
      <div>Like {props.like}</div>
    </div>
  );
};

export default Posts;
