import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Table from './Components/Tables/table'
import App from './Components/App/App';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';

import './index.css';

{/* Add routes for future components
  * Login
  * Register
  * FAQ
  * Profile
  * Users
  * Contact
  */}

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={ App } />
      <Route path="/table" component={ Table }/>
      <Route path="/login" component={ Login }/>
      <Route path="/register" component={ Register }/>
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
