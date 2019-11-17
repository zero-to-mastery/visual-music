import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { store } from './store/store';

import AppRouter from './routes/AppRouter';
import { BrowserRouter as Router } from 'react-router-dom';

import './globalScss/index.scss';
import { placeholder } from '@babel/types';

// this line for making .env vars accessible in the whole app, https://stackoverflow.com/questions/49579028/adding-an-env-file-to-react-project
require('dotenv').config();

const ROUTER = (
    <Provider store={store}>
        <Router>
            <AppRouter />
        </Router>
    </Provider>
);

store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(ROUTER, document.getElementById('root'));
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
