import React, { Component } from 'react';
//import to creat cards
import {
  Card,
  CardTitle,
  CardSubtitle,
  Col,
  Button
} from 'reactstrap';


class DonationCard extends Component {

  render() {
    return (
        <Col className="HomeCard" sm="4">
          <Card body>
            <img src={this.props.item.image} />
            <div className="DonationCard">
            <CardTitle> Donated To: <p className="donate-p">{this.props.item.name}</p></CardTitle>
            <CardSubtitle>Donated Amount: {this.props.item.amount}</CardSubtitle>
            </div>
          </Card>
        </Col>
    );
  }
}

export default DonationCard;