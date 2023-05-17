import { Navigate } from "react-router-dom"
import React from "react"
import { connect } from "react-redux"

const mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth,
})

export const withAuthRedirectComponent = (Component) => {
    function RedirectComponent (props) {
        if (!props.isAuth) {
            return <Navigate to='/login' />
        }
        return <Component {...props} />

    }
   
    const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent
  }

