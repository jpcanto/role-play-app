import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Login from './views/login/Login';
import Main from './views/main/Main';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Main} path='/' exact />
            <Route component={Login} path='/login' exact />
        </BrowserRouter>
    );
};

export default Routes;

