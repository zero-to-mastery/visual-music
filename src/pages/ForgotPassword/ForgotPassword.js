import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from '../../store/actions/authActions';
import { withRouter } from 'react-router-dom';
import ForgotPasswordPage from './ForgotPasswordPage/ForgotPasswordPage.component';

function ForgotPassword() {
    const dispatch = useDispatch();
    const error = useSelector(state => state.authError);

    const [email, setEmail] = useState('');

    const onFormSubmit = event => {
        event.preventDefault();
        dispatch(forgotPassword({ email }));
    };

    if (error) {
        console.log(error);
    }

    return (
        <ForgotPasswordPage setEmail={setEmail} onFormSubmit={onFormSubmit} />
    );
}

export default withRouter(ForgotPassword);
