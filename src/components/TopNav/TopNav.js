/***********************

Top Navigation Component.

Current features:
1. Log In button.
2. Sign Up button. --Log Out button as ame as Sign Up for now

TODO: - Black background on scroll.

************************/

import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import classes from './TopNav.module.scss';
import logo from '../../assets/LogoSVG.svg';
import { useSelector, useDispatch } from 'react-redux';
import { logOut, cleanError } from '../../store/actions/authActions';
import Button from '../units/Button/Button';
import ShowElementsOnFullSize from '../../utils/ShowElementsOnFullSize';

const UnAuthNav = ({ dispatch }) => (
    <div>
        <Link to="/login">
            <Button
                onClick={() => dispatch(cleanError())}
                text="Log In"
                btnClass="logIn"
            />
        </Link>
        <Link to="/register">
            <Button
                onClick={() => dispatch(cleanError())}
                text="Sign Up"
                btnClass="signUp"
            />
        </Link>
    </div>
);

const AuthNav = ({ dispatch, pathname }) => {
    return (
        <div>
            {pathname !== '/app' && (
                <Link to="/app">
                    <Button text="App" btnClass="app" />
                </Link>
            )}
            <Button
                text="Log Out"
                btnClass="signUp"
                onClick={() => dispatch(logOut())}
            />
        </div>
    );
};

function TopNav(props) {
    const uid = useSelector(state => state.firebase.auth.uid);
    const dispatch = useDispatch();
    const { isFullSize, isElementsShowed } = useSelector(
        state => state.fullSize
    );

    return (
        <>
            <nav
                id="top_nav"
                className={`${classes.topNav}
         ${isFullSize && !isElementsShowed && classes.hideNav}`}
            >
                <Link to="/">
                    <img src={logo} alt="logo" height="85px" width="85px" />
                </Link>
                {uid ? (
                    <AuthNav
                        pathname={props.location.pathname}
                        dispatch={dispatch}
                    />
                ) : (
                    <UnAuthNav dispatch={dispatch} />
                )}
            </nav>
            {isFullSize && <ShowElementsOnFullSize elemID={'top_nav'} />}
        </>
    );
}

export default withRouter(TopNav);
