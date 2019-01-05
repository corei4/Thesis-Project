import React, { Component } from 'react'

export class CreateEvent extends Component {
  state = {
    title: '',
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white ">
          <h5 className="grey-text text-darken-3">Create new event</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id='title' onChange={this.handleChange} required />
          </div>
          <div className="input-field">
            <label htmlFor="content">Event Details</label>
            <textarea id='content' className='materialize-textarea' onChange={this.handleChange} required />
          </div>
          <div className="input-field">
            <button className="btn pink darken-2 z-depth-0 text-white">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateEvent;