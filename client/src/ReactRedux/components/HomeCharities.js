import React, { Component, Fragment } from 'react';
import { Pie } from 'react-chartjs-2'

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
    this.state = {
    };
  }
  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'right',
  }
  componentDidMount() { }
  render() {
    return (
      <Fragment>
        <Row >
          <Col sm="6">
            <Card body>
              <CardTitle>{this.props.item.name}</CardTitle>
              <CardTitle>{this.props.item.name}</CardTitle>
              <img width="100%" src={this.props.item.image} alt="Card image cap" />
              <Button>Start Fundraising</Button>
              <div>
                <Pie
                  data={{
                    labels: ['Amount', 'Found'],
                    datasets: [
                      {
                        label: 'Amount',
                        data: [
                          this.props.item.amount,
                          5000,
                        ],
                        backgroundColor: [
                          'rgba(255, 99, 132, 0.6)',
                          'rgba(54, 162, 235, 0.6)',
                          'rgba(255, 206, 86, 0.6)',
                        ]
                      }
                    ]
                  }}
                  options={{
                    title: {
                      display: this.props.displayTitle,

                      text: 'Amount VS. Found',
                      fontSize: 25
                    },
                    legend: {
                      display: this.props.displayLegend,
                      position: this.props.legendPosition
                    }
                  }}
                />
              </div>
              <Button>Start Fundraising</Button>
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default HomeCharities;
