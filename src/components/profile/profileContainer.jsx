import React from "react";
import Profile from './Profile'
import { connect } from "react-redux";
import { getUserProfile, updateStatus, getUserStatus, savePhoto, saveProfile } from '../../redux/profileReducer'
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { compose } from "redux";

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = this.props.authoruzedUserId
        }
        if (!userId) {
            this.props.router.navigate('/login')

        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.router.params.userId != prevProps.router.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile {...this.props}
                isOwner={!this.props.router.params.userId}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                savePhoto={this.props.savePhoto}
                saveProfile={this.props.saveProfile}
                />
        )
    }
}

const withRouter = (Component) => {
    function ComponentWithRouterProp(props) {
        const location = useLocation()
        const navigate = useNavigate()
        const params = useParams()
        return (
            <Component {...props} router={{ location, navigate, params }} />
        )
    }
    return ComponentWithRouterProp
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.userStatus,
    authoruzedUserId: state.auth.userId,
    isAuth: state.auth.isAuth

})

export default compose(
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateStatus, savePhoto, saveProfile }),
    withRouter,
)(ProfileContainer)
