import React from 'react';
import ReactDOM from 'react-dom';
import './globalScss/index.scss';
import AppRouter from './routes/AppRouter';
import { BrowserRouter as Router } from 'react-router-dom';
import HambergurToggle from './components/VisualPanel/HambergurToggle/HambergurToggle';
import VisualPanel from './components/VisualPanel/VisualPanel';
// import VisualItem from './components/VisualPanel/VisualItem/VisualItem';
// ReactDOM.render(
//     <Router>
//         <AppRouter />
//     </Router>,
//     document.getElementById('root')
// );
ReactDOM.render(
    <VisualPanel />,
    document.getElementById('root')
);

/**
 * For now, I thought it would be easier just to create an individual file for the routing system called AppRouter, instead of dismantling and reorganizing everything in App for the time being.
 */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
