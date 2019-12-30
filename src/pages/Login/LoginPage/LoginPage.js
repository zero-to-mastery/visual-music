import React from 'react';
import classes from './Login.module.scss';
import { Link } from 'react-router-dom';
import Span from '../../../components/units/Span/Span';

function LoginPage({ setEmail, setPassword, onRemember, onFormSubmit, span }) {
    return (
        <div className={classes.overlay}>
            <div className={classes.backgroundTitle}>
                <h2 className={classes.heading}>
                    Visualize music a new way!
                </h2>
                <p className={classes.subtitle}>
                    The app that converts your favorite music pieces into visual expressions.
                </p>
            </div>
            <div className={classes.loginOverlay}>
                <div className={classes.innerLoginOverlay}>
                    <form className={classes.loginForm} onSubmit={onFormSubmit}>
                        <div className={classes.titleGroup}>
                            <span>Sign In</span>
                        </div>
                        {span && (
                            <Span className={classes.errorLabel} content={span} />
                        )}
                        <div className={classes.emailGroup}>
                            <div className={classes.emailGroup}>
                                <label className={classes.emailLabel}>
                                    Email address
                                </label>
                                <input
                                    className={classes.emailField}
                                    type="email"
                                    onChange={e => {
                                        setEmail(e.target.value);
                                    }}
                                    required
                                />
                            </div>
                        </div>
                        <div className={classes.passwordGroup}>
                            <label className={classes.passwordLabel}>
                                Password
                            </label>
                            <input
                                className={classes.passwordField}
                                type="password"
                                onChange={e => {
                                    setPassword(e.target.value);
                                }}
                                required
                            />
                        </div>
                        <div className={classes.signInProps}>
                            <div className={classes.rememberMeGroup}>
                                <input
                                    className={classes.passwordField}
                                    type="checkbox"
                                    onChange={e => {
                                        //TODO: 
                                    }}
                                />
                                <label className={classes.rememberMeLabel}>
                                    Remember Me
                                </label>
                            </div>
                            <div className={classes.forgotPasswordLinksGroup}>
                                <Link
                                    to="/forgot-password"
                                    className={classes.forgotPasswordLink}
                                >
                                    Forgot Password?
                                </Link>
                            </div>
                        </div>
                        <div className={classes.loginButtonGroup}>
                            <button className={classes.loginButton} type="submite">
                                Continue
                            </button>
                        </div>
                        <div className={classes.signUpRequest}>
                            Don't have an account?
                            <span className={classes.signUpLink}>
                                <Link
                                    to="/register"
                                    className={classes.signUpLink}
                                >
                                    Sign Up
                                </Link>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
