export const register = newUser => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        firebase
            .auth()
            .createUserWithEmailAndPassword(newUser.email, newUser.password)
            .then(resp => {
                return firestore
                    .collection('users')
                    .doc(resp.user.uid)
                    .set({
                        name: newUser.name,
                        email: newUser.email
                    });
            })
            .then(() => {
                dispatch({ type: 'REGISTER' });
            })
            .catch(err => {
                dispatch({
                    type: 'AUTH_ERROR',
                    err
                });
            });
    };
};

export const logIn = credentials => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase
            .auth()
            .signInWithEmailAndPassword(credentials.email, credentials.password)
            .then(() => {
                dispatch({ type: 'LOGIN_WITH_CREDENTIALS' });
            })
            .catch(err => {
                dispatch({
                    type: 'AUTH_ERROR',
                    err
                });
            });
    };
};

export const logOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase
            .auth()
            .signOut()
            .then(() => {
                dispatch({ type: 'SIGNOUT' });
            });
    };
};

export const forgotPassword = ({ email }) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase
            .auth()
            .sendPasswordResetEmail(email)
            .then(() => {
                // Todo - Customize account mail.
                // https://support.google.com/firebase/answer/7000714
                alert('email sent successfully');
                dispatch({ type: 'FORGOT_PASSWORD' });
            })
            .catch(err => {
                dispatch({
                    type: 'AUTH_ERROR',
                    err
                });
            });
    };
};

export const cleanError = () => {
    return (dispatch, getState) => {
        try {
            dispatch({
                type: 'ERROR_CLEARED'
            });
        } catch (err) {
            dispatch({
                type: 'SONG_ERR',
                err
            });
        }
    };
};
