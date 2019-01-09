
import React, { Component } from 'react'
import Modal from 'react-responsive-modal'

class Success extends Component {
  state = {
    open: true,
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
      <Modal
        open={open}
        onClose={this.onCloseModal}
        center
      >
        <div className="success_div alert alert-success" role="alert">
          <h4 className="alert-heading">Thank You!</h4>
          <p> your payment successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
          <hr />
          <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
        </div>
      </Modal>
    )
  }
}
export default Success;
