import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { store } from './store/store';

import AppRouter from './pages/AppRouter';
import { BrowserRouter as Router } from 'react-router-dom';

import './globalScss/index.scss';

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
