import React from 'react';

import {Route, BrowserRouter} from "react-router-dom";

// import logo from '../logo.svg';
import Home from '../components/Home';
import One from '../components/One';
import Two from '../components/Two';
import Three from '../components/Three';
import Login from '../components/Login';
import Logout from '../components/Logout';

import TopNav from '../components/TopNav';

import './App.css';

function App() {

  return (
    <BrowserRouter>

    <div className="app">
      <TopNav />

       <div className="content">
          <Route path="/home" component={Home} />
          <Route path="/one" component={One} />
          <Route path="/two" component={Two} />
          <Route path="/three" component={Three} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
       </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
