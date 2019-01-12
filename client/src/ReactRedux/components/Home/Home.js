import React from 'react';
import { Row } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import './Home.css';
import redone from './homepic.jpg';
import HomeCharities from './HomeCharities.js';
import axios from 'axios';
import Spinner from 'react-spinner-material';
import Content from './Content';
import Join from './Join';

class Home extends React.Component {
 constructor(props) {
   super(props)
   this.state = {
     modal: false,
     test: [],
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
   this.props.history.push('/AllCharities');
 };
 render() {
   if (this.state.test.length > 0) {
     return (
       <div>
         <div className="img-container">
           <img src={redone} alt='not loading' />
           <div className="centered" style={{paddingTop:"200px"}}><h1 style={{ paddingTop:"200px", textAlign:"left"}}>Give a helping hand to those in need</h1>
           <h3 style={{ textAlign:"left"}}>Join us today to start raising funds for a charitable cause</h3></div>
           <Link to="/AllCharities" className="bottom-right" style={{ textDecoration: 'none', color: "white" }}>
             <button onClick={this.allCharities} className='btn btn-lg ' >Start Fundraising</button>
           </Link>
         </div>
         <Row></Row>
         <div className="center">
           <h2>Happening Now</h2>
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
         <Content />
         <Join />
       </div >
     )
   } else {
     return (
       <div>
         <div className="img-container">
           <img src={redone} alt='not loading' />
           <div className="centered"><h1 style={{fontFamily: "Roboto, sans-serif", paddingTop:"200px", textAlign:"center"}}>Give a helping hand to those in need</h1>
           <h3>Join us today to start raising funds for a charitable cause</h3></div>
           <Link to="/AllCharities" style={{ textDecoration: 'none', color: "white" }}>
             <button onClick={this.allCharities} className='btn btn-lg' >Start Fundraising</button>
           </Link>
         </div>
         <div>
           <Row>
             <div style={{margin: '0 auto', paddingTop: '20px'}}>
             <Row><Spinner size={100} spinnerColor={"#333"} spinnerWidth={2} visible={true} /></Row>
             </div>
             <div className="HomeCards">
             </div>
           </Row>
         </div>
         <div className="ButtonRaise">
           <Link to='/AllCharities'><button id="See">See All Charities</button></Link>
         </div>
         <Content />
         <Join />
       </div>
     )
   }
 }
}
export default withRouter(Home);
