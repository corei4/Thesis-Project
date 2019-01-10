import React, { Component } from 'react';
//import to creat cards
import {
  Card,
  CardTitle,
  CardSubtitle,
  Col
} from 'reactstrap';

class DonationCard extends Component {

  render() {
    return (
        <Col className="HomeCard" sm="4">
          <Card body>
            <div className="HomeCardImg">
             <img src={this.props.item.image} alt="Card Cap"/>
            </div>
            <div className="DonationCard">
            <CardTitle> Donated To: <p className="donate-p">{this.props.item.name}</p></CardTitle>
            <CardSubtitle>Donated Amount: {this.props.item.donation_amount}</CardSubtitle>
            </div>
          </Card>
        </Col>
    );
  }
}

export default DonationCard;