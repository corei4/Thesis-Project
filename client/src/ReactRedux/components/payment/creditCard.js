import React, { Component } from 'react'
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css'
import Modal from "react-responsive-modal";
import styles from './creditCard.css';

class creditCard extends Component {
  state = {
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    focused: '',
    open: false
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleClick = (e) => {
    this.setState({
      focused: e.target.id
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state, 'state')
  }
  render() {
    const { open } = this.state;
    return (
      <div style={{ styles }}>
        <button className="button_donate" onClick={this.onOpenModal}>Donate </button>
        <Modal
          open={open}
          onClose={this.onCloseModal}
          center
          classNames={{
            transitionEnter: styles.transitionEnter,
            transitionEnterActive: styles.transitionEnterActive,
            transitionExit: styles.transitionExitActive,
            transitionExitActive: styles.transitionExitActive,
          }}
          animationDuration={1000}
        >
          <h1 className="donation "> Donation </h1>
          <div className="row justify-content-center">
            <Cards className="credit-card"
              number={this.state.number}
              name={this.state.name}
              expiry={this.state.expiry}
              cvc={this.state.cvc}
              focused={this.state.focused}
            />
            <div className="col-4 ">
              <form onSubmit={this.handleSubmit}>
                <div >
                  <input type="tel" id="number" style={{ color: 'white' }} placeholder="Card Number" minLength="16" maxLength='16' onChange={this.handleChange} onClick={this.handleClick} required />
                </div>
                <div >
                  <input type="text" id="name" style={{ color: 'white' }} placeholder="Name" onChange={this.handleChange} onClick={this.handleClick} required />
                </div>
                <div >
                  <input type="tel" id="expiry" style={{ color: 'white' }} placeholder="Valid Thru" maxLength='6' minLength='6' onChange={this.handleChange} onClick={this.handleClick} required />
                  <input type="tel" id="cvc" style={{ color: 'white' }} placeholder="CVC" maxLength='4' minLength='4' onChange={this.handleChange} onClick={this.handleClick} required />
                </div>
                <button className='btn btn-warning center'> submit</button>
              </form>

            </div>
          </div>

        </Modal>
      </div>
    );
  }
}
export default creditCard;