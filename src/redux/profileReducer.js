import { profileAPI } from "../api/api"

const ADD_POST = 'profile/ADD_POST'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_USER_STATUS_MESSAGE = 'profile/SET_USER_STATUS_MESSAGE'
const UPDATE_USER_STATUS = 'profile/UPDATE_USER_STATUS'
const DELETE_POST = 'profile/DELETE_POST'

const initialState = {
    postData: [
        { id: 1, message: 'Hi, how are you?' },
        { id: 2, message: "It's my first post" },
    ],
    profile: null,
    userStatus: '',
}

export const profileReducer = (state = initialState, action) => {
    const stateCopy = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 3,
                message: action.newPost
            }
            stateCopy.postData.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy

        case SET_USER_PROFILE:
            return { ...state, profile: action.profile }

        case SET_USER_STATUS_MESSAGE:
            return { ...state, userStatus: action.statusText }

        case DELETE_POST:
            return { ...state, postData: state.postData.filter(post => post.id !== action.postId) }

        default: return stateCopy

    }
}

export const addPostEctionCreater = (newPost) => ({ type: ADD_POST, newPost })
export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile })
export const setUserStatusMessage = statusText => ({ type: SET_USER_STATUS_MESSAGE, statusText })
export const updateUserStatus = status => ({ type: UPDATE_USER_STATUS, newText: status })
export const deletePost = postId => ({ type: DELETE_POST, postId })

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