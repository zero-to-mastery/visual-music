import React from 'react';
import ReactDOM from 'react-dom';
import './globalScss/index.scss';
import App from './pages/App/App';
import Login from './pages/Login/Login';

ReactDOM.render(<Login />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
