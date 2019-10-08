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
    }, () => {console.log(this.state.email)})
  };

  render() {
    console.log(this.props.location.email);
    return (
        <div className={classes.forgotPasswordDiv}>
          <div className={classes.forgotPasswordForm}>
            <h1 className={classes.pageTitle}>Forgot Password</h1>
            <p className={classes.subTitle}>Submit the form to reset your password</p>
            <div className={classes.formGroup}>
              <FormInput labelText="Enter your email" onEmailInputChange={this.onEmailInputChange} placeholder='jon@westeros.com'/>
            </div>
            <div>
              <Button btnClass='signUp' text='Submit' onClick={{
                /*TODO: HandleSubmit*/
              }}/>
            </div>
          </div>

        </div>
    )
  };
}

export default ForgotPassword