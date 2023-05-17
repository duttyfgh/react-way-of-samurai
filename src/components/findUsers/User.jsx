import { NavLink } from 'react-router-dom'
import classes from './FindUsers.module.css'

const User = ({
    user,
    followingInProgress,
    unFollow,
    follow
}) => {

    return (
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img className={classes.photoProfile} src={user.photos.small != null
                            ? user.photos.small
                            : 'https://www.fote.org.uk/wp-content/uploads/2017/03/profile-icon.png'} alt="..." />
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            unFollow(user.id)

                        }}>Unfollow</button>

                        : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            follow(user.id)

                        }}>Follow</button>
                    }
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{"user.location.country"}</div>
                    <div>{"user.location.city"}</div>
                </span>
            </span>
        </div>)
}
export default User
