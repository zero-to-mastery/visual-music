import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import FBConfig from '../firebase/config';

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reactReduxFirebase(FBConfig, {
            userProfile: 'users',
            useFirestoreForProfile: true,
            attachAuthIsReady: true
        }),
        reduxFirestore(FBConfig)
    )
);