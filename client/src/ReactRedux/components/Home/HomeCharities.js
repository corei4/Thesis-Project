import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Axios from 'axios'
import {
  Card,
  CardTitle,
  CardSubtitle,
  Col,
  Button,
  Progress
} from 'reactstrap';

class HomeCharities extends Component {
  getID = () => {
    Axios.post('/creditcard', {
      "charity_to_id": this.props.item.id
    }).catch(function (error) {
      console.log(error, 'error in donate button')
    })
  }
  progress() {
    var x = Math.floor((this.props.item.amount_received / this.props.item.amount) * 100);
    return x;
  }
  render() {
    console.log(this.props.item.id, 'propsss')
    return (
      <Col className="HomeCard" sm="4">
        <Card body>
          <CardTitle>{this.props.item.name}</CardTitle>
          <CardTitle>{this.props.item.location}</CardTitle>
          <CardSubtitle>{this.props.item.description}</CardSubtitle>
          <div className="HomeCardImg">
            <img width="100%" src={this.props.item.image} alt="Card cap" />
          </div>
          <CardSubtitle>Amount to raise: {this.props.item.amount}</CardSubtitle>
          <Progress color="success" value={this.progress()} />
          <CardSubtitle>Total received: {this.props.item.amount_received}</CardSubtitle>
          <Link to='/creditcard'>
            <Button onClick={this.getID}>Donate</Button>
          </Link>
        </Card>
      </Col>
    );
  }
}
export default HomeCharities;
