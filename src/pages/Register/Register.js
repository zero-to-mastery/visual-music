import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../store/actions/authActions';
import { withRouter, Redirect } from 'react-router-dom';
import RegisterPage from './RegisterPage/RegisterPage';

function Register() {
    const uid = useSelector(state => state.firebase.auth.uid);
    const error = useSelector(state => state.auth.authError);

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onFormSubmit = event => {
        event.preventDefault();
        dispatch(register({ name, email, password }));
    };

    if (uid) {
        return <Redirect to="/app" />;
    }

    if (error) {
        console.log(error);
    }

    return (
        <RegisterPage
            setName={setName}
            setEmail={setEmail}
            setPassword={setPassword}
            onFormSubmit={onFormSubmit}
        />
    );
}

export default withRouter(Register);
