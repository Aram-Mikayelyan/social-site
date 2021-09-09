import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";

const DialogItem = (props) => {
  const path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog + " " + s.active}>
      <img className={s.dialogImg} src={props.imgSrc} alt="" />
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
