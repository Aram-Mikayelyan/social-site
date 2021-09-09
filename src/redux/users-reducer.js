import { userApi } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 20,
  currentPage: 1231,
  isFetching: false,
  isFollowingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return {
              ...u,
              followed: true,
            };
          }
          return { ...u };
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return {
              ...u,
              followed: false,
            };
          }
          return { ...u };
        }),
      };
    case SET_USERS:
      return { ...state, users: action.users };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_COUNT:
      return { ...state, totalUsersCount: action.totalCount };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        isFollowingInProgress: action.isFetching
          ? [...state.isFollowingInProgress, action.userId]
          : state.isFollowingInProgress.filter((id) => id !== action.userId),
      };

    default:
      return state;
  }
};

export const followSucces = (userId) => {
  return {
    type: FOLLOW,
    userId,
  };
};

export const unfollowSucces = (userId) => {
  return {
    type: UNFOLLOW,
    userId,
  };
};

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  };
};

export const setTotalCount = (totalCount) => {
  return {
    type: SET_TOTAL_COUNT,
    totalCount,
  };
};

export const setIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  };
};

export const setIsFollowingInProgress = (isFetching, userId) => {
  return {
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId,
  };
};
export const getUsers = (currentPage, pageSize) => (dispatch) => {
  dispatch(setIsFetching(true));

  userApi.getUsers(currentPage, pageSize).then((data) => {
    dispatch(setIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalCount(54));
    dispatch(setCurrentPage(currentPage));
  });
};

export const unfollow = (userId) => (dispatch) => {
  dispatch(setIsFollowingInProgress(true, userId));
  userApi.unfollow(userId).then((data) => {
    if (data.resultCode === 0) {
      dispatch(unfollowSucces(userId));
    }
    dispatch(setIsFollowingInProgress(false, userId));
  });
};

export const follow = (userId) => (dispatch) => {
  dispatch(setIsFollowingInProgress(true, userId));
  userApi.follow(userId).then((data) => {
    if (data.resultCode === 0) {
      dispatch(followSucces(userId));
    }
    dispatch(setIsFollowingInProgress(false, userId));
  });
};

export default usersReducer;
