import React from 'react';
import './Signup.styles.scss';

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            type: 'password',
        };
    }

    showHide = (e) => {
        e.stopPropagation();
        if (this.state.type === 'password') {
            this.setState({ type: 'text' })
        } else { 
            this.setState({type: 'password'})
        }
    };

    handleSubmit = () => {
        console.log(this.state);
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className='signup-component'>
                <div className='signup'>
                    <div className='headline'>
                        <div className='headline1'>Welcome to Visual Music!</div>
                        <div className='sub-headline'>Get Started Absolutely free</div>
                    </div>
                    <div className='searchfields'>
                        <div className='name'>
                            <label htmlFor='name'>Name</label>
                            <input type='text' name='name' id='name' required onChange={this.handleChange} />
                        </div>
                        <div className='email'>
                            <label htmlFor='Email'>Email Address</label>
                            <input type='email' name='email' id='email' required onChange={this.handleChange} />
                        </div>
                        <div className='password'>
                            <label htmlFor='password'>Password</label>
                            <input type={this.state.type} name='password' id='password' onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className='showpassword'>
                        <input type='checkbox' name='showpassword' id='showpassword' onClick={this.showHide} />
                        <label htmlFor='showpassword'>Show Password</label>
                    </div>
                    <div className='custom-button'>
                        <button type='submit' onClick={this.handleSubmit}>
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;
