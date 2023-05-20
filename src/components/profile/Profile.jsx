import React from "react";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsConteiner from './My posts/MyPostsContenier';
import store from '../../redux/redux-store';

function Profile(props) {
  return (
    <div>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        isOwner={props.isOwner}
        savePhoto={props.savePhoto}
      />

      <MyPostsConteiner store={store} />
    </div>
  )
}

export default Profile