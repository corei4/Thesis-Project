import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import organizations from './ReactRedux/components/organizations'
import CreateEvent from './ReactRedux/components/createEvent';
import MyNavBar from './ReactRedux/components/NavBar/MyNavBar.js';
import Home from './ReactRedux/components/SlideShow/Home';
import Signup from './ReactRedux/components/Signup'
import SignIn from './ReactRedux/components/SignIn'
import UserProfile from './ReactRedux/components/userProfile/UserProfile';
import creditCard from './ReactRedux/components/payment/creditCard'
import AllCharities from './ReactRedux/components/AllCharities'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      test: [],
    };
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
            <Route path='/profile' component={UserProfile} />
            <Route path='/create' component={CreateEvent} />
            <Route path='/creditcard' component={creditCard} />
            <Route path='/AllCharities' component={AllCharities} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App
