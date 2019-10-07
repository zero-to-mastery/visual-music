// this page has been created just as establish first connection to firebase server.
// the user and password are "a@a.com".

import React from 'react';
import { Redirect } from 'react-router-dom';
import firebase from '../../firebase/config';

export default function LoginAction({ email, password }) {
	// i've created 'isLogedIn' as a const here right now although that for the future this cant be located here.
	// adding redux as controller for all actions and as the one place that hold state may be super useful :)
	const [isLogedIn, setIsLogedIn] = React.useState(false);

	if (isLogedIn) return <Redirect to="/app" />;

	firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then(() => {
			console.log('im logged in :)');
			setIsLogedIn(true);
		})
		.catch(err => {
			// right now  im only logged at the console the err but firebase are giving as a unic err every time
			console.log(err);
		});
	return null;
}
