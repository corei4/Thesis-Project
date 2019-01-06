import React, { Component } from 'react'
// import './MyNavBar.css'
import { Link, withRouter, Redirect } from "react-router-dom";

class MyNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedOut: false
    };
  }
  signOut = () => {
    localStorage.removeItem('token');
    // window.location.href = '/';
    this.setState({
      isSignedOut: true
    });
  };

  render() {
    // if (this.state.isSignedOut){
    //   return <Redirect to='/' />
    // }
    if (localStorage.getItem('token')) {
      return (
        <div className="navbar-fixed">
          <nav className="nav-wrapper purple darken-4 col s1">
            <Link to='/' className=" brand-logo " style={{ textDecoration: 'none', color: "white" }}>Charitable</Link>
            <ul className=" right"  >
              <li><Link to="/" style={{ textDecoration: 'none', color: "white" }}>Home</Link></li>
              <li><Link to="/Organizations" style={{ textDecoration: 'none', color: "white" }}>Organizations</Link></li>
              <li onClick={this.signOut}><Link to="/Signup" style={{ textDecoration: 'none', color: "white" }}>Sign Out</Link></li>
              <li><Link to="/profile" style={{ textDecoration: 'none', color: "white" }}>Profile</Link></li>
            </ul>
          </nav>
        </div>
      )
    } else {
      return (
        <div className="navbar-fixed">
          <nav className="nav-wrapper purple darken-4 col s1">
            <Link to='/' className=" brand-logo " style={{ textDecoration: 'none', color: "white" }}>Charitable</Link>
            <ul className=" right"  >
              <li><Link to="/" style={{ textDecoration: 'none', color: "white" }}>Home</Link></li>
              <li><Link to="/Organizations" style={{ textDecoration: 'none', color: "white" }}>Organizations</Link></li>
              <li><Link to="/Signin" style={{ textDecoration: 'none', color: "white" }}>Log In</Link></li>
              <li><Link to="/Signup" style={{ textDecoration: 'none', color: "white" }}>Sign Up</Link></li>
            </ul>
          </nav>
        </div>
      )
    }
  }
}
export default MyNavBar;