import React from 'react';
import { Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Home.css';
import redone from './redone.jpg';
import HomeCharities from './HomeCharities.js';
import $ from "jquery";

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      test: [],
    };
  }
  componentDidMount() {
    $.ajax({
      url: '/charities',
      dataType: 'json',
      type: "GET",
      success: function (data) {
        console.log(data, "app in ajax ")
        this.setState({
          test: data
        })
        return data;
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  render() {
    return (
      <div>
      <div className="img-container">
        <Link to="/CharityCard" style={{ textDecoration: 'none', color: "white" }}>
          <img src={redone} alt='not loading' />
          <button className='btn btn-lg' >Fundraising</button>
        </Link>
      </div>
        <div>
          <Row>
            <div className="HomeCards">
              {this.state.test.map(item => (
                < HomeCharities key={item.id} item={item} />
              ))}
              </div>
          </Row>
        </div>
      </div>
    )
  }
}
export default Home;