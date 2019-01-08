import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from "react-router-dom";



class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoggedIn: false
    };
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
    var that = this;
    axios({
      method: 'post',
      url: '/account/signin',
      data: obj
    })
    .then(function (response) {
      console.log(response.data,"aa@aaaa@aaaa@aaaa@aaaa@aaaa@aaaa@aaaa@aa")
      localStorage.setItem('token', response.data.token);

      that.setState({
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
    if(this.state.isLoggedIn){
      return <Redirect to='/profile' />
    }
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