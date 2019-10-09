import React from 'react';
import classes from './resetPasswordPage.module.scss';
import FormInput from '../../components/FormInput/formInput.component';
import Button from '../../components/Button/Button';

class ResetPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newPassword: '',
            verifyPassword: ''
        };
    }

    onInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    // TODO: Implement submit functionality.
    // Added fetch function for test purposes
    onFormSubmit = async event => {
        event.preventDefault();
        const { newPassword, verifyPassword } = this.state;
        console.log(
            `newPassword: ${newPassword}, verifyPassword: ${verifyPassword}`
        );

        // boilerplate fetch for test purposes
        // will console.log the names of a users array provided by jsonplaceholder.typicode.com
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/users'
        );
        const data = await response.json();
        data.map(user => console.log(user.name));
    };

    render() {
        return (
            <div className={classes.resetPassword}>
                <div className={classes.resetPasswordForm}>
                    <h1 className={classes.pageTitle}>Reset Password</h1>
                    <p className={classes.subTitle}>
                        Complete the form below to reset your password.
                    </p>
                    <div className={classes.formGroup}>
                        <FormInput
                            labelText="Enter a new password"
                            placeholder="Password"
                            type="password"
                            name="newPassword"
                            onChange={this.onInputChange}
                        />
                        <FormInput
                            labelText="Verify your password"
                            placeholder="Password"
                            type="password"
                            name="verifyPassword"
                            onChange={this.onInputChange}
                        />
                    </div>
                    <div>
                        <Button
                            btnClass="signUp"
                            text="Submit"
                            type="submit"
                            onClick={this.onFormSubmit}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default ResetPassword;
