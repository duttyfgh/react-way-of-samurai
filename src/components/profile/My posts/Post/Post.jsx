import classes from './Post.module.css'
import React from "react";

function Post(props) {
  return (

    <div className={classes.item}>
      <img src="https://www.fote.org.uk/wp-content/uploads/2017/03/profile-icon.png" alt="" />
        <span>{props.message}</span>
      <button>Like</button>
      
    </div>

  )

}

export default Post