import React from 'react';
import Button from '../../components/Button/Button';
import FormInput from '../../components/FormInput/formInput.component';
import classes from './forgotPasswordPage.module.scss'

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ''
    }
  }

  onEmailInputChange = (event) => {
    this.setState({
      email: event.target.value
    })
  };

  // TODO: Implement submit button to reset password
  onFormSubmit = async (event) => {
    // Placeholder for implementation of password reset functionality.\
    event.preventDefault();
    const {email} = this.state;
    console.log(email);

    // example fetch
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
  };

  render() {
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
                        onChange={this.onEmailInputChange}
                        placeholder="jon@westeros.com"
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
            </form>
        </div>
    );
  };
}

export default ForgotPassword