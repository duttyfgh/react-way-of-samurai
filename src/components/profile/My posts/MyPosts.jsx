import classes from './MyPosts.module.css'
import React from "react";
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../../common/formsControls/formsControls';

const maxLengt10 =  maxLengthCreator(10)

function MyPosts(props) {

  const postsElements = props.postData.map(post => <Post key={post.id} message={post.message} />)

  const addPost = (values) => {
    props.addPost(values.messageText)
  }

  return (

    <div className={classes.myPosts}>
      my posts
      <div>

          <AddPostFormRedux onSubmit={addPost} />

        <div className={classes.posts}>
          posts
          {postsElements}
        </div>
      </div>
    </div>

  )
}

const AddPostForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <Field
          placeholder='Post message'
          component={Textarea}
          name={'messageText'}
          validate={[required, maxLengt10]}
          />
        <button><i className={["fa-regular fa-paper-plane"]}></i></button>
      </form >
    </div>

  )
}

const AddPostFormRedux = reduxForm({
  form:'profileAddPostForm'
})(AddPostForm)

export default MyPosts