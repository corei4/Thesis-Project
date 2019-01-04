import React, { Component } from 'react'
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css'
import { CardElement, injectStripe } from 'react-stripe-elements';


class creditCard extends Component {
  state = {
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    focused: ''
  }
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
  render() {

    return (
      <div>
        <div>
          <Cards
            number={this.state.number}
            name={this.state.name}
            expiry={this.state.expiry}
            cvc={this.state.cvc}
            focused={this.state.focused}
          />
        </div>
        <form>
          <div className='row'>
            <input type="tel" id="number" placeholder="Card Number" minLength="16" maxLength='16' onChange={this.handleChange} onClick={this.handleClick} />
            <div>E.g.: 49..., 51..., 36..., 37...</div>
          </div>
          <div>
            <input type="text" id="name" placeholder="Name" onChange={this.handleChange} onClick={this.handleClick} />
          </div>
          <div>
            <input type="tel" id="expiry" placeholder="Valid Thru" maxLength='6' onChange={this.handleChange} onClick={this.handleClick} />
            <input type="tel" id="cvc" placeholder="CVC" maxLength='4' onChange={this.handleChange} onClick={this.handleClick} />
          </div>
        </form>
      </div>
    )
  }
}
export default creditCard;

{/* <div>
  <div>
    <Cards
      number={this.state.number}
      name={this.state.name}
      expiry={this.state.expiry}
      cvc={this.state.cvc}
      focused={this.state.focused}
    />
  </div>
  <form>
    <div>
      <input type="tel" id="number" placeholder="Card Number" minLength="16" maxLength='16' onChange={this.handleChange} onClick={this.handleClick} />
      <div>E.g.: 49..., 51..., 36..., 37...</div>
    </div>
    <div>
      <input type="text" id="name" placeholder="Name" onChange={this.handleChange} onClick={this.handleClick} />
    </div>
    <div>
      <input type="tel" id="expiry" placeholder="Valid Thru" maxLength='6' onChange={this.handleChange} onClick={this.handleClick} />
      <input type="tel" id="cvc" placeholder="CVC" maxLength='4' onChange={this.handleChange} onClick={this.handleClick} />
    </div>
  </form>
</div> */}
