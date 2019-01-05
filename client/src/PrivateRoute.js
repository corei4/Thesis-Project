// See this answer https://stackoverflow.com/a/43171515/208079. Perhaps someone with more rep than me can mark this as a duplicate.

// The basic idea is to wrap routes that require authentication with a custom component (PrivateRoute in the example below). PrivateRoute will use some logic to determine if the user is authenticated and then either; allow the requested route to render, or redirect to the login page.

// This is also described in the react-router training docs at this link https://reacttraining.com/react-router/web/example/auth-workflow.

// Here is an implementation using the above as inspiration.

// In App.js (or where your routing is happening)

// import React, { Component } from 'react'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
// import PrivateRoute from './PrivateRoute'
// import MyComponent from '../src/MyComponent'
// import MyLoginForm from '../src/MyLoginForm'

// <Router>
//   <Route path="/login" component={MyLoginForm} />
//   <PrivateRoute path="/onlyAuthorizedAllowedHere/" component={MyComponent} />
// </Router>


// And the PrivateRoute Component

// This is used to determine if a user is authenticated and
// if they are allowed to visit the page they navigated to.

// If they are: they proceed to the page
// If not: they are redirected to the login page.
import React from 'react'
// import AuthService from './Services/AuthService'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
    console.log('entered here')
  // Add your own authentication on the below line.
  const isLoggedIn = localStorage.getItem('token') !== null;
    console.log('is logged in', isLoggedIn)
  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/SignIn', state: { from: props.location } }} />
        )
      }
    />
  )
}

export default PrivateRoute