import React from 'react';
import classes from './Login.module.scss';

function LoginPage({ setEmail, setPassword, onFormSubmit }) {
    return (
        <div className={classes.overlay}>
            <div className={classes.loginOverlay}>
                <form className={classes.loginForm} onSubmit={onFormSubmit}>
                    <div className={classes.titleGroup}>
                        <span>Welcome back!</span>
                    </div>
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
                    <div className={classes.loginButtonGroup}>
                        <button className={classes.loginButton} type="submite">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
