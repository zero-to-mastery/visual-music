import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import FBConfig from '../firebase/config';

const composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reactReduxFirebase(FBConfig, {
            userProfile: 'users',
            useFirestoreForProfile: true,
            attachAuthIsReady: true
        }),
        reduxFirestore(FBConfig)
    )
);
