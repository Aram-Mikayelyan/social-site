import { connect } from "react-redux";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

function mapStateToProps(state) {
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAddPost: (newPost) => {
      dispatch(addPostActionCreator(newPost));
    },
  };
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
