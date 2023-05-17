import React from "react";
import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';

function Nav() {

  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to='/profile' className={navData => navData.isActive?classes.active:classes.item}>Profile</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/dialogs' className={navData => navData.isActive?classes.active:classes.item}>Messages</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/news' className={navData => navData.isActive?classes.active:classes.item}>News</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/music' className={navData => navData.isActive?classes.active:classes.item}>Music</NavLink>
      </div>
    </nav>
  )
}

export default Nav;
