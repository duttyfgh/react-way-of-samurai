import { usersAPI } from "../api/api"

const FOLLOW = 'profile/FOLLOW'
const UNFOLLOW = 'profile/UNFOLLOW'
const SET_USERS = 'profile/SET_USERS'
const SET_CURRENT_PAGE = 'profile/SET_CURRENT_PAGE'
const SET_USERS_TOTAL_COUNT = 'profile/SET_USERS_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'profile/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'profile/TOGGLE_IS_FOLLOWING_PROGREES'

const initialState = {
    users: [],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1,
    isFethcing: true,
    followingInProgress: []
}

export const usersReduser = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return user
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    }
                    return user
                })
            }

        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_USERS_TOTAL_COUNT: {
            return { ...state, totalUsersCount: action.count }
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFethcing: action.isFethcing }
        }

        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state, followingInProgress: action.isFethcing
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }

        default:
            return state
    }

}

export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unFollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setUsersTotalCount = (count) => ({ type: SET_USERS_TOTAL_COUNT, count })
export const setToggleFetching = (isFethcing) => ({ type: TOGGLE_IS_FETCHING, isFethcing })
export const setToggleIsFollowingProgress = (isFethcing, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFethcing, userId })

//thunk санки
export const requestUsers = (page, pageSize) => async (dispatch) => {
    dispatch(setToggleFetching(true))
    dispatch(setCurrentPage(page))

    const response = await usersAPI.getUsers(page, pageSize)
    dispatch(setToggleFetching(false))
    dispatch(setUsers(response.items))
    dispatch(setUsersTotalCount(response.totalCount))
}

const followUnfollowflow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(setToggleIsFollowingProgress(true, userId))
    const response = await apiMethod(userId)

    if (response.resultCode == 0) {
        dispatch(actionCreator(userId))
    }

    dispatch(setToggleIsFollowingProgress(false, userId))
}

export const follow = (userId) => async (dispatch) => {
    followUnfollowflow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
}


export const unFollow = (userId) => async (dispatch) => {
    followUnfollowflow(dispatch, userId, usersAPI.unFollow.bind(usersAPI), unFollowSuccess)

}

