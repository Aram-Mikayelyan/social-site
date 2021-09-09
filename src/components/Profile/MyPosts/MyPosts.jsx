import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "./MyPosts.module.css";
import Posts from "./Posts/Posts";

const MyPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name="myPost"
        component="input"
        placeholder="Your posts..."
        className={s.input}
      />
      <div className={s.submit}>
        <button className={s.button}> Submit </button>
      </div>
    </form>
  );
};

const MyPostsReduxForm = reduxForm({ form: "myPost" })(MyPostForm);

const MyPosts = (props) => {
  // let newPostElement = React.createRef();

  // // const addPost = () => {
  // //   props.onAddPost();
  // // };

  // // let onPostChange = () => {
  // //   let text = newPostElement.current.value;
  // //   props.updateNewPostText(text);
  // // };
  const addPost = (values) => {
    console.log(values.myPost);
    props.onAddPost(values.myPost);
  };

  return (
    <div>
      <h3>My post</h3>
      <MyPostsReduxForm onSubmit={addPost} />
      <div>
        {props.postData.map((p) => (
          <Posts messages={p.message} like={p.likesCount} key={Math.random()} />
        ))}
      </div>
    </div>
  );
};
export default MyPosts;
