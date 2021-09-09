import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  setIsFollowingInProgress,
  getUsers,
  unfollow,
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }
  onPageChange = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };
  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            onPageChange={this.onPageChange}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            isFollowingInProgress={this.props.isFollowingInProgress}
          />
        )}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    isFollowingInProgress: state.usersPage.isFollowingInProgress,
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: (currentPage) => {
//       dispatch(setCurrentPageAC(currentPage));
//     },
//     setTotalCount: (totalCount) => {
//       dispatch(setTotalCountAC(totalCount));
//     },
//     setIsFetching: (isFetching) => {
//       dispatch(setIsFetchingAC(isFetching));
//     },
//   };
// }

const mapDispatchToProps = {
  setCurrentPage,
  setIsFollowingInProgress,
  getUsers,
  unfollow,
  follow,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(UsersContainer);
