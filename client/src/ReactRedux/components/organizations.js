import React, { Component } from 'react'
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Row, Col
} from 'reactstrap';
import axios from 'axios';


class organizations extends Component {
  constructor(props) {
    super(props)
    this.state = {
      test: []
    };
  }
  componentDidMount() {
    let that = this;
    axios.get('/userOrganizations').then(function (response) {
      console.log(response, 'RESPONSE')
      that.setState({
        test: response.data
      })
    }).catch(function (error) {
      console.log(error, 'charities error')
    })
  }

  render() {
    return (
      <div>
        <Row>
          {this.state.test.map(item => (
            <Col sm='3' key={item.userId}>
              <Card body>
                <CardBody>
                  <CardTitle>{item.firstName}</CardTitle>
                  <CardSubtitle>{item.firstName}</CardSubtitle>
                </CardBody>
                <img width="100%" src={item.image} alt="Card cap" />
                <CardBody>
                  <CardText>{item.email}</CardText>
                  <CardText>{item.telephone}</CardText>
                  <button href="#" >Add Fundarising</button>
                </CardBody >
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    )
  }
}

export default organizations;