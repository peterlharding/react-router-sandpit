import React from 'react';
import {useSelector} from "react-redux";
import {Route, BrowserRouter} from "react-router-dom";

// import logo from '../logo.svg';
import Home from '../components/Home';
import One from '../components/One';
import Two from '../components/Two';
import Three from '../components/Three';
import Login from '../components/Login';
import Logout from '../components/Logout';

import TopNav from '../components/TopNav';
import GuardedRoute from '../components/GuardedRoute';

import {selectAuthenticated} from '../features/authenticated/authenticatedSlice';

import './App.css';

function App() {

  const {authenticated} = useSelector(selectAuthenticated);

  return (
    <BrowserRouter>

    <div className="app">
      <TopNav />

       <div className="content">
          <Route path="/home" component={Home} />
          <GuardedRoute path='/one' component={One} auth={authenticated} />
          <GuardedRoute path='/two' component={Two} auth={authenticated} />
          <GuardedRoute path='/three' component={Three} auth={authenticated} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
       </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
