import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux'
import { profileReducer } from './profileReducer'
import { dialogsReducer } from './dialogsReduser'
import { usersReduser } from './usersReduser'
import { authReduser } from './authReduser'
import { reducer as formReduser } from 'redux-form'
import ThunkMiddleware from 'redux-thunk'
import { appReduser } from './appReducer'

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReduser,
    auth: authReduser,
    form: formReduser,
    app: appReduser

})

//connecting redux extension in chrome:
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers,composeEnhancers(applyMiddleware(ThunkMiddleware)))

export default store