import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import userPhoto from "../../../assets/images/user.png";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div className={s.avaDiv}>
      <img
        src={profile.photos.large ? profile.photos.large : userPhoto}
        className={s.avatar}
        alt=""
      />
      <div className={s.pre}>
        <p>{profile.fullName}</p>
      </div>
      <ProfileStatus status={status} updateStatus={updateStatus} />
    </div>
  );
};

export default ProfileInfo;
