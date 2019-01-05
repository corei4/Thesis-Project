import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from './PrivateRoute'

import organizations from './ReactRedux/components/organizations'
import CreateEvent from './ReactRedux/components/createEvent';
import MyNavBar from './ReactRedux/components/NavBar/MyNavBar.js';
import Home from './ReactRedux/components/Home/Home';
import Signup from './ReactRedux/components/Signup'
import SignIn from './ReactRedux/components/SignIn'
import UserProfile from './ReactRedux/components/userProfile/UserProfile';
import creditCard from './ReactRedux/components/payment/creditCard';
import success from './ReactRedux/components/payment/success'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      test: [],
    };
  }

  isLoggedIn = (nextState, replace) => {
    console.log('token test');
    console.log(localStorage.getItem('token'));
    if (!localStorage.getItem('token')) {
      console.log('not logged in');
      replace({
        pathname: '/SignIn'
      })
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <MyNavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/organizations' component={organizations} />
            <Route path='/Signup' component={Signup} />
            <Route path='/SignIn' component={SignIn} />
            <PrivateRoute path='/profile' component={UserProfile} />
            <Route path='/create' component={CreateEvent} />
            <Route path='/creditcard' component={creditCard} />
            <Route path='/success' component={success} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}


export default App
