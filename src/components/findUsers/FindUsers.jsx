import classes from './FindUsers.module.css'
import { Paginator } from '../../common/paginator/Paginator'
import User from './User'

const FindUsers = ({
    totalUsersCount,
    currentPage,
    onPageChanged,
    users,
    pageSize,
    followingInProgress,
    unFollow,
    follow,
    
    
}) => {

    let userId = 0

    return (
        <div className={classes.main}>
            <Paginator
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                key={userId}
            />
            {
                users.map(user => {
                    userId = user.id
                   return <User key={userId} user={user} followingInProgress={followingInProgress} unFollow={unFollow} follow={follow} />
                })}
        </div >
    )
}

export default FindUsers
