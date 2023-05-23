import React, { useState } from "react"
import classes from "./ProfileInfo.module.css"
import Preloader from "../../../common/preloader/preloader"
import preloader from "../../../assets/images/preloader.svg"
import ProfileStatusWithHooks from "../profileStatus/profileStatusWithHooks"
import ProfileDataForm from "./profileDataForm/ProfileDataForm"
import DropDownPonel from "./DropDownPonel/DropDownPonel"

const ImgLarge = (props) => {
  const [modalVisible, setModalVisible] = useState(false)

  const openModal = () => {
    setModalVisible(true);
  };

  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  const handleOverlayClick = () => {
    setModalVisible(false);
  };

  return (
    <div className={classes.imgBlock}>
      <img
        className={classes.userPhoto}
        src={
          props.profile.photos.large
            ? props.profile.photos.large
            : "https://www.fote.org.uk/wp-content/uploads/2017/03/profile-icon.png"
        }
        onClick={openModal}
      />

      {modalVisible && (
        <div className={classes.modalOverlay} onClick={handleOverlayClick}>
          <div className={classes.modal} onClick={handleModalClick}>
            <img
              className={classes.modalPhoto}
              src={
                props.profile.photos.large
                  ? props.profile.photos.large
                  : "https://www.fote.org.uk/wp-content/uploads/2017/03/profile-icon.png"
              }
              alt="Large Profile Photo"
            />
          </div>
        </div>
      )}
    </div>
  );
};

const ProfileInfo = (props) => {
  const [editMode, setEditMode] = useState(false)

  if (!props.profile) {
    return <Preloader preloader={preloader} />
  }

  const onSubmit = (formData) => {
     props.saveProfile(formData).then(()=> {
      setEditMode(false)
    })
  }

  return (
    <div>
      <div className={classes.userProfileHeader}>
        <ImgLarge profile={props.profile} />
        {editMode
          ? <ProfileDataForm initialValues={props.profile} onSubmit={onSubmit} setEditMode={setEditMode} {...props} />
          : <ProfileStatusWithHooks  {...props}
          />}
        {props.isOwner && <DropDownPonel editMode={editMode} setEditMode={setEditMode} {...props} />}

      </div>
    </div>
  );
};

export default ProfileInfo;
