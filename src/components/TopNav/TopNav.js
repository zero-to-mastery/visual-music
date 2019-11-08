/***********************

Top Navigation Component.

Current features:
1. Log In button.
2. Sign Up button. --Log Out button as ame as Sign Up for now

TODO: - Black background on scroll.

************************/

import React from 'react';
import { Link } from 'react-router-dom';
import classes from './TopNav.module.scss';
import logo from '../../assets/LogoSVG.svg';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../store/actions/authActions';
import Button from '../units/Button/Button';

const UnAuthNav = () => (
    <div>
        <Link to="/login">
            <Button text="Log In" btnClass="logIn" />
        </Link>
        <Link to="/register">
            <Button text="Sign Up" btnClass="signUp" />
        </Link>
    </div>
);

const AuthNav = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <Button
                text="Log Out"
                btnClass="signUp"
                onClick={() => dispatch(logOut())}
            />
        </div>
    );
};

function TopNav() {
    const uid = useSelector(state => state.firebase.auth.uid);

    return (
        <nav className={classes.topNav}>
            <Link to="/">
                <img src={logo} alt="logo" height="85px" width="85px" />
            </Link>
            {uid ? <AuthNav /> : <UnAuthNav />}
        </nav>
    );
}

export default TopNav;
