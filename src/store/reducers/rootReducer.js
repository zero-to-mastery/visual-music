import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { authReducer } from './authReducer';

// the root reducer will become the state at the whole app.
// state.firebase/state.auth for example, are ways to reach the content the state holds.

const rootReducer = combineReducers({
    auth: authReducer,
    firebase: firebaseReducer
});

export default rootReducer;
