import React from "react"
import { connect } from "react-redux"
import classes from './Settings.module.css'
import { logout } from '../../redux/authReduser'

const Settings = (props) => {
    return (
        <div>
            <span className={classes.logout}>
                Logout
                <i onClick={props.logout} className={["fa-solid fa-person-walking-arrow-right"]} title={'logout?'}></i>
            </span>
        </div>
    )
}

export default connect(null, { logout })(Settings)