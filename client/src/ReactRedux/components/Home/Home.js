import React from 'react';
import { Row } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import './Home.css';
import redone from './redone.jpg';
import HomeCharities from './HomeCharities.js';
import axios from 'axios';


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
            <div className="centered"><h1>Make good things happen</h1>
            <h3>Join over 22 million people supporting charity and personal causes</h3></div>
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
            <Link to='/AllCharities'><button>See All Charities</button></Link>
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
