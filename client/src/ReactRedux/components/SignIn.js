import React, { Component } from 'react'
import axios from 'axios';
const jwtDecode = require('jwt-decode');


class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    let obj = {
      email: this.state.email,
      password: this.state.password
    }
    axios({
      method: 'post',
      url: '/account/signin',
      data: obj
    })
    .then(function (response) {
      localStorage.setItem('token', response.data.token);
      console.log('TOKEN', jwtDecode(localStorage.getItem('token')))
      window.localStorage.setItem('token', response.data.token);
      console.log('TOKEN////////', jwtDecode(window.localStorage.getItem('token')))
      var userData = jwtDecode(window.localStorage.getItem('token')).result
      console.log(userData[0],"userDatauserDatauserDatauserDatauserDatauserData");
      window.localStorage.setItem('id', userData[0].id)
      window.localStorage.setItem('firstName', userData[0].firstName)
      window.localStorage.setItem('email', userData[0].email)
      window.localStorage.setItem('telephone', userData[0].telephone)
      window.localStorage.setItem('lastName', userData[0].lastName)
      window.localStorage.setItem('imgUrl', userData[0].imgUrl)

      window.location.href = '/profile';

      this.setState({
        isLoggedIn: true
      })
    })
    .catch(function (error) {
      console.log(error);
    });
    e.preventDefault();
    console.log(this.state)
  }
  render() {
    return (
      <div className="container ">
      <h3 className='row black-text'>Sign In</h3>
        <div className="row  ">
          <form className="col s12 " id="reg-form" onSubmit={this.handleSubmit}>
            <div className="row ">
              <div className="input-field  col s6">
                <input id="email" type="email" className="validate" required onChange={this.handleChange} />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input id="password" type="password" className="validate " minLength="6" required onChange={this.handleChange} />
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <div className="input-field ">
              <button className="btn btn-register purple waves-light" type="submit" name="action">Sign In
              </button>
            </div>
          </form>
        </div>
      </div>

    )
  }
}
export default SignIn;