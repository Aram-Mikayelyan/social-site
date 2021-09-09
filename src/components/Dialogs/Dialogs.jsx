import React from "react";
import { Field, reduxForm } from "redux-form";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field placeholder="message" name="newMessageBody" component="input" />
      <button>Add</button>
    </form>
  );
};

const AddMessageReduxForm = reduxForm({ form: "newMessageBody" })(
  AddMessageForm
);

const Dialogs = (props) => {
  const onSubmit = (formData) => {
    props.onAddMessage(formData.newMessageBody);
  };
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {props.dialogsPage.dialogsData.map((d) => (
          <DialogItem name={d.name} id={d.id} imgSrc={d.imgSrc} key={d.id} />
        ))}
      </div>
      <div className={s.messages}>
        {props.dialogsPage.messagesData.map((m) => (
          <Message message={m.message} key={Math.random()} />
        ))}
      </div>
      <AddMessageReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Dialogs;
