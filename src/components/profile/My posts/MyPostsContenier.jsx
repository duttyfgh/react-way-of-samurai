import { connect } from 'react-redux';
import { addPostEctionCreater } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

//настройка пропсов / данних 
const mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText,
  }
}

//настройка коллбеков / функций
const mapDiapatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostEctionCreater(newPostText))
    },
  }
}

const MyPostsConteiner = connect(mapStateToProps, mapDiapatchToProps)(MyPosts)

export default MyPostsConteiner
