import React from 'react';
import axios from 'axios';
import FavCard from "./FavCard.js";
import './style.css';
import Pagination from './Pagination';
// import organizations from '../organizations';
// Row
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Row, Col, Container
} from 'reactstrap';

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    var exampleItems = [{ id: 1, name: "Wait to fetch data" }]
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      exampleItems: [],
      pageOfItems: []

    };
    this.onChangePage = this.onChangePage.bind(this);
  }
  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
    console.log(pageOfItems)
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  componentDidMount() {
    let that = this;
    axios.post('/userCharities', {
      owner_id: 1
    })
      .then(function (res) {
        console.log(res);
        that.setState({
          exampleItems: res.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(this.state.exampleItems, 'exampleItems')
  }

  render() {
    return (
      <div className="centerTab">
            <Row>
              <Col sm="12">
              {/* <h4 className="h4pagi">Charities</h4> */}
              <Row>
              {this.state.pageOfItems.map(item =>
				        <FavCard key={item.id} item={item}/>	
                )}
			      </Row>
			      <div>
            <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} />
            </div>
              </Col>
            </Row>
         
      </div>
    );
  }
}