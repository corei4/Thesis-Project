import React from 'react';
import { Row } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import './Home.css';
import redone from './redone.jpg';
import HomeCharities from './HomeCharities.js';
import $ from "jquery";
import axios from 'axios';


class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      test: [],
    };
  }
  componentDidMount() {
    // $.ajax({
    //   url: '/charities',
    //   dataType: 'json',
    //   type: "GET",
    //   success: function (data) {
    //     console.log(data, "app in ajax ")
    //     this.setState({
    //       test: data
    //     })
    //     return data;
    //   }.bind(this),
    //   error: function (xhr, status, err) {
    //     // console.error(this.props.url, status, err.toString());
    //     console.log('homed error',err)
    //   }.bind(this)
    // });
    let that = this;
    axios.get('/charities').then(function(response) {
      console.log(response, 'RESPONSE')
      that.setState({
        test: response.data.slice(0, 6)
      })
    }).catch(function(error){
      console.log(error, 'charities error')
    })
  }

  allCharities = () => {
    this.props.history.push('/AllCharities');
  };

  render() {
    return (
      <div>
      <div className="img-container">
          <img src={redone} alt='not loading' />
          <Link to="/AllCharities" style={{ textDecoration: 'none', color: "white" }}>
          <button onClick={this.allCharities} className='btn btn-lg' >Start Fundraising</button>
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
        <div className="ButtonRaise">
              <button>See All Charities</button>
        </div>
      </div>
    )
  }
}
export default withRouter(Home);