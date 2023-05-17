import classes from './Header.module.css'
import React from "react";
import { NavLink } from 'react-router-dom';

function Header(props) {

  return (
    <header className={classes.header}>
      <NavLink to='/profile'><img src='https://i.postimg.cc/3NGqqtf7/logo.png' /></NavLink>
      <span className={classes.logoText}>utyfgh</span>

      <div className={classes.vigets}>

        <NavLink to='/findUsers'><i className="fa-sharp fa-solid fa-compass"></i></NavLink>
        <NavLink to='/settings'><i className={"fa-solid fa-gear"}></i></NavLink>
        <div className={classes.loginBlock}>
          {props.isAuth
            ? <NavLink to='/profile' className={classes.loginLink}>{props.login}</NavLink>
            : <NavLink to='/login'><i className={["fa-solid fa-arrow-right-to-bracket"]}></i></NavLink>}
        </div>

      </div>
    </header>
  )
}

export default Header