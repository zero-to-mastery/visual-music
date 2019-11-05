import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TopNav from '../components/TopNav/TopNav';
import AppBrowser from '../pages/App/AppBrowser';
import LandingPage from '../pages/LandingPage/LandingPage';
import Login from '../pages/Login/Login';
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword';
import Register from '../pages/Register/Register';
import ResetPassword from '../pages/ResetPassword/resetPasswordPage.component';

export default function AppRouter() {
    return (
        <>
            <TopNav />{' '}
            <Switch>
                <Route exact path="/" component={LandingPage} />{' '}
                <Route path="/login" component={Login} />{' '}
                <Route path="/register" component={Register} />{' '}
                <Route path="/app" component={AppBrowser} />{' '}
                <Route path="/forgot-password" component={ForgotPassword} />{' '}
                <Route path="/reset-password" component={ResetPassword} />{' '}
            </Switch>{' '}
        </>
    );
}

/**
 * For simplicity and the sake of a working router prototype, I kept the names of the paths simple for the time being - these can easily be changed and adapted going forward.  Essentially, any new routers going forward can easily be added and all other work can occur in tandem without hindering or blocking the current routing system until new routes are ready to be integrated.
 */
