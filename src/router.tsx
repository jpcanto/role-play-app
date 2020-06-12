import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Login from './components/login/Login';
import Main from './components/main/Main';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Main} path='/' exact />
            <Route component={Login} path='/login' exact />
        </BrowserRouter>
    );
};

export default Routes;

