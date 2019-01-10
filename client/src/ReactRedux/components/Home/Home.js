import React from 'react';
import { Row } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import './Home.css';
import redone from './redone.jpg';
import HomeCharities from './HomeCharities.js';
import axios from 'axios';
import Spinner from 'react-spinner-material';
import Content from './Content'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      test: []
    };
  }
  componentDidMount() {
    let that = this;
    axios.get('/charities').then(function (response) {
      console.log(response, 'RESPONSE')
      that.setState({
        test: response.data.slice(0, 6)
      })
    }).catch(function (error) {
      console.log(error, 'charities error')
    })
  }

  allCharities = () => {
    this.props.history.push("/AllCharities");
  };

  render() {
    if (this.state.test) {
      return (
        <div>
          <div className="img-container">
            <img src={redone} alt='not loading' />
            <div className="centered"><h1 style={{fontFamily: "Roboto, sans-serif", paddingTop:"200px", textAlign:"center"}}>Give a helping hand to those in need</h1>
            <h4>Join us today to start raising funds for a charitable cause</h4></div>
            <Link to="/AllCharities" className="bottom-right" style={{ textDecoration: 'none', color: "white" }}>
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
            <Link to='/AllCharities'><button id="See">See All Charities</button></Link>
          </div>
        </div >
      )
    } else {
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
                <h1>loading</h1>
              </div>
            </Row>
          </div>
          <div className="ButtonRaise">
            <Link to='/AllCharities'><button>See All Charities</button></Link>
          </div>
        </div>
      )
    }
  }
}
export default withRouter(Home);
