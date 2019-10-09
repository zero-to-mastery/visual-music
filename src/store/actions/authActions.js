export const register = newUser => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        firebase
            .auth()
            .createUserWithEmailAndPassword(newUser.email, newUser.password)
            .then(resp => {
                console.log(resp, firestore);
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
                    type: 'ERROR',
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
                    type: 'ERROR',
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
