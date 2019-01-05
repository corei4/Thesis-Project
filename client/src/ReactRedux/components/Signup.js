import React, { Component } from "react";
import { connect } from "react-redux";
import FileBase64 from "react-file-base64";
import { signUp } from "../store/actions/index";
import axios from "axios";
import $ from "jquery";


class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      isNotUpload: true
    };
  }
  getFiles(files) {
    this.setState({ files: files[0].base64 });
    var baseStr = files[0].base64.substr(22);
    console.log("files new: ", baseStr);
  
    $.ajax({
      url: "https://api.imgur.com/3/image",
      type: "POST",
      data: JSON.stringify(baseStr),
      headers: {
        Authorization: "Client-ID 0d9a88ca2265606"
      },
      contentType: "undefined",
      success: data => {
        console.log("image uploaded", data.data.link);
        this.setState({
          isNotUpload: false,
          image: data.data.link
        });
      },
      error: function(error) {
        console.error("image not uploaded", error);
      }
    });
  
  }
   
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    let obj = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      telephone: this.state.phoneNumber,
      image: this.state.image
    };
    axios({
      method: "post",
      url: "/account/signup",
      data: obj
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    e.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <h3 className="row black-text">Sign Up</h3>
        <div className="row ">
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="first_name"
                  type="text"
                  className="validate"
                  value={this.state.firstName}
                  onChange={e => this.setState({ firstName: e.target.value })}
                />
                <label htmlFor="first_name">First Name</label>
              </div>
              <div className="input-field col s6">
                <input
                  id="last_name"
                  type="text"
                  className="validate"
                  value={this.state.lastName}
                  onChange={e => this.setState({ lastName: e.target.value })}
                />
                <label htmlFor="last_name">Last Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="email"
                  type="email"
                  className="validate"
                  value={this.state.email}
                  onChange={e => this.setState({ email: e.target.value })}
                />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  type="text"
                  className="validate"
                  value={this.state.phoneNumber}
                  onChange={e => this.setState({ phoneNumber: e.target.value })}
                />
                <label htmlFor="tel">Phone Number</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="password"
                  type="password"
                  className="validate"
                  value={this.state.password}
                  onChange={e => this.setState({ password: e.target.value })}
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <FileBase64 multiple={true} onDone={this.getFiles.bind(this)} />
            <div className="input-field">
              <button className="btn purple lighten-1 z-depth-0"  disabled={this.state.isNotUpload}>
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state, "state");
  return { state: state.articles };
};
const mapDispatchToProps = dispatch => {
  return {
    signUp: payload => dispatch(signUp(payload))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
