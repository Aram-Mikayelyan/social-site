import { userApi, profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  postData: [
    { id: 1, message: 'It"s my first post', likesCount: 14 },
    { id: 2, message: "Hi, How are you?", likesCount: 24 },
    { id: 3, message: "Im fine and you", likesCount: 24 },
    { id: 3, message: "Im fine and you", likesCount: 24 },
    { id: 3, message: "Im fine and you", likesCount: 24 },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: action.newPost,
        likesCount: 0,
      };
      return {
        ...state,
        postData: [...state.postData, newPost],
        newPostText: "",
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
};

export const addPostActionCreator = (newPost) => {
  return {
    type: "ADD-POST",
    newPost,
  };
};

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getUserProfile = (userId) => (dispatch) => {
  if (!userId) {
    userId = 18606;
  }
  userApi.getUserProfile(userId).then((data) => dispatch(setUserProfile(data)));
};

export const getStatus = (userId) => (dispatch) => {
  profileAPI
    .getStatus(userId)
    .then((response) => dispatch(setStatus(response.data)));
};

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};

export default profileReducer;
