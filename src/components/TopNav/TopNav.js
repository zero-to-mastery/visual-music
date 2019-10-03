import React from 'react';
import classes from './TopNav.module.scss';
import logo from '../../assets/LogoSVG.svg';

import Button from '../Button/Button';

const TopNav = () => (
  <nav className={classes.topNav}>
    <img src={logo} alt="logo" height="85px" width="85px" />
    <div>
      <Button text="Log In" btnClass="logIn" handleRouteChange={null} />
      <Button text="Sign Up" btnClass="signUp" handleRouteChange={null} />
    </div>
  </nav>
)

export default TopNav;
