import React from 'react';
import Button from '../../../components/Button/Button';
import FormInput from '../../../components/FormInput/formInput.component';
import classes from './ForgotPasswordPage.module.scss';

function ForgotPasswordPage({ setEmail, onFormSubmit }) {
    return (
        <div className={classes.forgotPasswordDiv}>
            <form className={classes.forgotPasswordForm}>
                <h1 className={classes.pageTitle}>Forgot Password</h1>
                <p className={classes.subTitle}>
                    Submit the form to reset your password
                </p>
                <div className={classes.formGroup}>
                    <FormInput
                        labelText="Enter your email"
                        type="email"
                        onChange={e => setEmail(e.target.value)}
                        placeholder="jon@westeros.com"
                    />
                </div>
                <div>
                    <Button
                        btnClass="signUp"
                        text="Submit"
                        type="submit"
                        onClick={onFormSubmit}
                    />
                </div>
            </form>
        </div>
    );
}

export default ForgotPasswordPage;
