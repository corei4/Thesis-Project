import React, { Component } from 'react';
//import to creat cards
import {
  Card,
  CardTitle,
  Row,
  Col,
  Button
} from 'reactstrap';

class HomeCharities extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
        <Col className="HomeCard" sm="4">
          <Card body>
            <CardTitle>{this.props.item.name}</CardTitle>
            <CardTitle>{this.props.item.name}</CardTitle>
            <img width="100%" src={this.props.item.image} alt="Card image cap" />
            <Button>Donate</Button>
          </Card>
        </Col>
    );
  }
}

export default HomeCharities;
