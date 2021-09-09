import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/images/user.png";
import styles from "./styles.module.css";

function Users(props) {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      {pages.map((p) => {
        return (
          <span
            key={p.id}
            onClick={() => props.onPageChange(1230 + p)}
            className={
              props.currentPage === 1230 + p ? styles.selectedPage : styles.page
            }
          >
            {p}
          </span>
        );
      })}

      {props.users.map((u) => {
        return (
          <div key={u.id}>
            <span>
              <div>
                <NavLink to={`/profile/${u.id}`}>
                  <img
                    src={u.photos.large ? u.photos.large : userPhoto}
                    className={styles.userphoto}
                    alt=""
                  />
                </NavLink>
              </div>
              <div>
                {u.followed ? (
                  <button
                    disabled={props.isFollowingInProgress.some(
                      (id) => id === u.id
                    )}
                    onClick={() => {
                      props.unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    disabled={props.isFollowingInProgress.some(
                      (id) => id === u.id
                    )}
                    onClick={() => {
                      props.follow(u.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default Users;
