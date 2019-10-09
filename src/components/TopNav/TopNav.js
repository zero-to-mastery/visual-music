/***********************

Top Navigation Component.

Current features:
1. Log In button.
2. Sign Up button.

TODO: - Black background on scroll.

************************/

import React from 'react';
import { Link } from 'react-router-dom';
import classes from './TopNav.module.scss';
import logo from '../../assets/LogoSVG.svg';

import Button from '../Button/Button';

const TopNav = () => (
	<nav className={classes.topNav}>
		<img src={logo} alt="logo" height="85px" width="85px" />
		<div>
			<Link to="/login">
				<Button text="Log In" btnClass="logIn" />
			</Link>
			<Link to="/register">
				<Button text="Sign Up" btnClass="signUp" />
			</Link>
		</div>
	</nav>
    <nav className={classes.topNav}>
        <img src={logo} alt="logo" height="85px" width="85px" />
        <div>
            <Link to="/login">
                <Button text="Log In" btnClass="logIn" />
            </Link>
            <Link to={'/register'}>
                <Button text="Sign Up" btnClass="signUp" />
            </Link>
        </div>
    </nav>

);

export default TopNav;
