import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from '../pages/App/App';
import LandingPage from '../components/LandingPage/LandingPage';
import Login from '../pages/Login/Login';
import ForgotPassword from '../pages/ForgotPassword/forgotPasswordPage.component';
import SignUp from '../pages/Login/Signup';
import ResetPassword from '../pages/ResetPassword/resetPasswordPage.component';

export default function AppRouter() {
    return (
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/app" component={App} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/reset-password" component={ResetPassword} />
        </Switch>
    );
}

/**
 * For simplicity and the sake of a working router prototype, I kept the names of the paths simple for the time being - these can easily be changed and adapted going forward.  Essentially, any new routers going forward can easily be added and all other work can occur in tandem without hindering or blocking the current routing system until new routes are ready to be integrated.
 */
