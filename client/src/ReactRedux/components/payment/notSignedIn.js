import React, { Component } from 'react'
import 'react-credit-cards/es/styles-compiled.css'
import Modal from "react-responsive-modal";
import './creditCard.css';

class NotSignedIn extends Component {
  state = {
    open: true
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
        <Modal
          open={open}
          onClose={this.onCloseModal}
          center
          animationDuration={1000}
        >
          <div className="row justify-content-center">
            <h1 className="sign_in">
              Please Sign In
            </h1>
            <div className="col-4 ">
              <h1 className="guest">Continue as Guest</h1>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
export default NotSignedIn;