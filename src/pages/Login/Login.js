// i used react-hooks in coming page cause (first i"m big fan! and second ,)
// when it come to use redux, the new way of do that it without mapStateToProps
// etc .. and much more easy to grasp.
// i added notes on each hook for some that not familliar, hope you'll gonna like it,
// otherwise in the next pages there's no need for hooks again.

// this is fully working example of firebase-redux-auth.
// the user and password are a@a.com

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { withRouter, Redirect } from 'react-router-dom';
import LoginPage from './LoginPage/LoginPage';

function Login() {
    // useSelector Redux hook re-mount every time the `state` in redux-store modified.
    // at first visit in the page, `uid` and `authError` are both equal null.
    // after submiting a login request, one of them should not be null anymore...
    const uid = useSelector(state => state.firebase.auth.uid);
    const error = useSelector(state => state.auth.authError);

    // useSispatch its the second redux hooks, allow actions dispatching from react component.
    // we will dispatch { signIn } action imported from the store.

    const dispatch = useDispatch();

    // instead of `this, bind, constructor` etc.. useState give us an option to declare
    // a constant and direct function to change it
    // ( { setEmail() === this.setState(email: ) } )

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onFormSubmit = event => {
        event.preventDefault();
        dispatch(signIn({ email, password }));
    };

    // in case { uid } is not null anymore we want the user redirect to app
    if (uid) return <Redirect to="/app" />;

    if (error) {
        // i havnt seen a {loading: true/false} or {errorHandler} component etc,
        // so for now its just consoleing the error.
        // in the future i think its a good ui to set loading symbol attached to {loading: true} on submit and then back to false here,
        // and a error spaner showing firebase authError.

        console.log(error);
    }

    // all the JSX-HTML was previously here are on {LoginPage}
    return (
        <LoginPage
            setEmail={setEmail}
            setPassword={setPassword}
            onFormSubmit={onFormSubmit}
        />
    );
}

export default withRouter(Login);

// i implemented the store action only at login right now, but at the store there's actions ready for import both to register and sign out,
// (same actions for hooks implemntion or class based)
