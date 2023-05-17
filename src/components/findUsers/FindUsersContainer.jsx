import { connect } from "react-redux"
import {
    follow,
    setCurrentPage,
    unFollow,
    setToggleIsFollowingProgress,
    requestUsers

} from "../../redux/usersReduser"
import React from "react";
import FindUsers from "./FindUsers";
import preloader from '../../assets/images/preloader.svg'
import Preloader from "../../common/preloader/preloader";
import { compose } from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFethcing,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/usersSelectors";

class FindUsersContainer extends React.Component {
    constructor(props) {
        super(props);
        this.onPageChanged = this.onPageChanged.bind(this);
    }

    componentDidMount() {
        
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged(pageNumber) {
        this.props.requestUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFethcing ? <Preloader isFethcing={this.props.isFethcing} preloader={preloader} /> : null}
            <FindUsers
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                isFethcing={this.props.isFethcing}
                followingInProgress={this.props.followingInProgress}

            /></>
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFethcing: getIsFethcing(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        follow,
        setCurrentPage,
        setToggleIsFollowingProgress,
        requestUsers,
        unFollow
    }),

)(FindUsersContainer)