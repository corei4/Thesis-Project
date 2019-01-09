import React, { Component } from 'react'
import 'react-credit-cards/es/styles-compiled.css'
import { Link } from 'react-router-dom'
import Modal from 'react-responsive-modal'

class NotSignedIn extends Component {
  state = {
    open: true
  }
  onOpenModal = () => {
    this.setState({ open: true });
  };
  onCloseModal = () => {
    this.setState({ open: false });
    console.log(this.props, 'propssss');

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
          <div className="container">
            <Link to='signin'>
              <button className="guest btn-danger btn-lg"> Please Sign In</button>
            </Link>
          </div>
        </Modal>
      </div >
    );
  }
}
export default NotSignedIn;