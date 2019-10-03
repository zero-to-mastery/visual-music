import React from 'react';
import './TopNav.styles.css';
import logo from '../../assets/LogoSVG.svg';

import Button from '../../components/Button/Button.component.jsx';

const TopNav = () => (
  <nav className="top-nav">
    <img src={logo} alt="logo" height="85px" width="85px" />
    <div>
      <Button text="Log In" btnClass="log-in" handleRouteChange={null} />
      <Button text="Sign Up" btnClass="sign-up" handleRouteChange={null} />
    </div>
  </nav>
)

export default TopNav;
