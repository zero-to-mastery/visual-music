import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { store } from './store/store';

import AppRouter from './routes/AppRouter';
import { BrowserRouter as Router } from 'react-router-dom';
import Prompt from './components/Prompt/Prompt';
import './globalScss/index.scss';

// this line for making .env vars accessible in the whole app, https://stackoverflow.com/questions/49579028/adding-an-env-file-to-react-project
require('dotenv').config();

// const ROUTER = (
// 	<Provider store={store}>
// 		<Router>
// 			<AppRouter />
// 		</Router>
// 	</Provider>
// );

// store.firebaseAuthIsReady.then(() => {
// 	ReactDOM.render(ROUTER, document.getElementById('root'));
// });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
ReactDOM.render(<Prompt 
	title='MyTitle' 
	message='my very long message here for display' 
	onClosed={(e)=>console.log('prompt closed button clicked')}/>, 
document.getElementById('root'));