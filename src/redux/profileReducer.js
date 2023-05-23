import { stopSubmit } from "redux-form"
import { profileAPI } from "../api/api"

const ADD_POST = 'profile/ADD_POST'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_USER_STATUS_MESSAGE = 'profile/SET_USER_STATUS_MESSAGE'
const UPDATE_USER_STATUS = 'profile/UPDATE_USER_STATUS'
const DELETE_POST = 'profile/DELETE_POST'
const SAVE_PHOTO_SECCES = 'profile/SAVE_PHOTO_SECCES'

const initialState = {
    postData: [
        { id: 1, message: 'Hi, how are you?' },
        { id: 2, message: "It's my first post" },
    ],
    profile: null,
    userStatus: '',
}

export const profileReducer = (state = initialState, action) => {
    const stateCopy = {
        ...state,
        postData: [...state.postData]
    };

    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 3,
                message: action.newPost
            };
            stateCopy.postData.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;

        case SET_USER_PROFILE:
            return { ...state, profile: action.profile }

        case SET_USER_STATUS_MESSAGE:
            return { ...state, userStatus: action.statusText }

        case DELETE_POST:
            return { ...state, postData: state.postData.filter(post => post.id !== action.postId) }

        case SAVE_PHOTO_SECCES:
            return { ...state, profile: { ...state.profile, photos: action.photos } }

        default: return stateCopy

    }
}

export const addPostEctionCreater = newPost => ({ type: ADD_POST, newPost })
export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile })
export const setUserStatusMessage = statusText => ({ type: SET_USER_STATUS_MESSAGE, statusText })
export const updateUserStatus = status => ({ type: UPDATE_USER_STATUS, newText: status })
export const deletePost = postId => ({ type: DELETE_POST, postId })
export const updateUserPhotoSucsses = photos => ({ type: SAVE_PHOTO_SECCES, photos })

//thunks:
export const getUserProfile = (userId) => async (dispatch) => {
    const response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response))
}

export const getUserStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getUserStatus(userId)
    dispatch(setUserStatusMessage(response))
}

export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.resultCode === 0) {
        dispatch(updateUserStatus(status))
    }
}

export const savePhoto = (file) => async (dispatch) => {
    const response = await profileAPI.savePhoto(file)
    if (response.resultCode === 0) {
        dispatch(updateUserPhotoSucsses(response.data.photos))
    }
}

export const saveProfile = (newProfile) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    const response = await profileAPI.saveProfile(newProfile)
    if (response.resultCode === 0) {
        dispatch(getUserProfile(userId))
    }
    else {
        dispatch(stopSubmit('editProfile', { _error: response.messages[0] }))
        return Promise.reject(response.messages[0] )
    }
}