import React, { Component } from 'react'
import 'react-credit-cards/es/styles-compiled.css'
import { Link } from 'react-router-dom'

class NotSignedIn extends Component {
  state = {
    open: false
  }
  onOpenModal = () => {
    this.setState({ open: true });
  };
  onCloseModal = () => {
    this.setState({ open: false });
  };
  render() {
    const { open } = this.state;
    return (
      <div>
        <div className="styles_modal__gNwvD"
          open={open}
          onClose={this.onCloseModal}
          center
          animationDuration={1000}>
          <div className="row col s4">
            <Link to="/signin">
              <button className="sign_in btn-primary btn-lg ">Please Sign In</button>
            </Link>
            <div className="col-6 ">
              <button className="guest btn-danger btn-lg">Continue as Guest</button>
            </div>
          </div>
          <button className="styles_closeButton__20ID4">
            <svg className="styles_closeIcon__1QwbI" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 36 36">
              <path d="M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z"></path>
            </svg>
          </button>
        </div>
      </div >
    );
  }
}
export default NotSignedIn;