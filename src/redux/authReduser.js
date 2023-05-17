import { stopSubmit } from "redux-form"
import { authAPI } from "../api/api"

const SET_USER_DATA = 'auth/SET_USER_DATA'

const initialState = {
    userUd: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReduser = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,

            }

        default:
            return state
    }

}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: { userId, email, login, isAuth } })

//thunks

export const getAuthUserData = () => async (dispatch) => {
    const response = await authAPI.me()
    if (response.resultCode === 0) {
        const { id, email, login } = response.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe)
    if (response.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        const message = response.messages.length > 0 ? response.messages[0] : 'Incorrect email or password'
        dispatch(stopSubmit('login', { _error: message }))
    }
}

export const logout = () => async (dispatch) => {
    const response = await authAPI.loginout()
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))

    }
}
