import React from 'react';
import classes from './forgotPassword.module.scss';

/*
 Main component for Forgot-Password.

 Allows users to input email address and click submit so that they can
 retrieve their lost password.

 Current features:
 1. Adding email to input

*/

class forgotPassword extends React.Component {
    constructor() {
        super();
        this.state = {
            email: ''
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className={classes.forgotpasscomponent}>
                <div className={classes.container}>
                    <div className={classes.forgotpass}>
                        <div className={classes.headlines}>
                            <h2 className={classes.headline}>Forgot Password</h2>
                        </div>
                        <div className={classes.searchfields}>
                            <div className={classes.email}>
                                <label htmlFor='Email'>Email Address</label>
                                <input type='email' name='email' id='email' required onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className={classes.custombutton}>
                            <button type='submit' onClick={this.handleSubmit}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default forgotPassword;
