import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import New from './pages/New';

export default function Routes(){
   // const token = localStorage.getItem('token');

   // var rotaInicial = Login;
  //  if(token != null)
   // rotaInicial = Dashboard;
   // console.log(token);
    return(
        <BrowserRouter>
            <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/new" component={New} />
            </Switch>
        </BrowserRouter>
    )
}