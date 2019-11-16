// for notes, visit Login.js

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register, cleanError } from '../../store/actions/authActions';
import { withRouter, Redirect } from 'react-router-dom';
import RegisterPage from './RegisterPage/RegisterPage';


function Register() {

    const uid = useSelector(state => state.firebase.auth.uid);
    const error = useSelector(state => state.authError);

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [span, setSpan] = useState(null);

    const onFormSubmit = event => {
        event.preventDefault();
        dispatch(cleanError());
        setSpan(
            <img alt="loading" src={require('../../assets/loading.svg')} />
        );
        dispatch(register({ name, email, password }));
    };

    if (uid) return <Redirect to="/app" />;

    if (error) {
        if (span !== error) setSpan(error);
    }

    return (
        <RegisterPage
            setName={setName}
            setEmail={setEmail}
            setPassword={setPassword}
            onFormSubmit={onFormSubmit}
            span={span}
        />
    );
}

export default withRouter(Register);
