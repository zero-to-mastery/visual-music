import React from 'react';
import Button from '../../components/Button/Button';
import '../../components/Button/Button.module.scss';
import FormInput from '../../components/FormInput/formInput.component';
import './forgotPasswordPage.styles.scss'





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
        <div className='forgotPasswordDiv'>
          <div className="forgotPasswordForm">
            <h1 className='pageTitle'>Forgot Password</h1>
            <p className='subTitle'>Submit the form to reset your password</p>
            <div className="formGroup">
              <FormInput labelText="Enter your email" onEmailInputChange={this.onEmailInputChange} placeholder='jon@westeros.com'/>
            </div>
            <div className="submitBtn">
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