import React from "react";
import { NavLink } from "react-router-dom";
import s from "./FriendItem.module.css";

const FriendItem = (props) => {
  const path = "/friends/" + props.id;

  return (
    <div>
      <label>
        <img src={props.imgSrc} className={s.friendImg} alt="" />
        <NavLink to={path} className={s.friendNameLink}>
          {props.name}
        </NavLink>
      </label>
    </div>
  );
};

export default FriendItem;
