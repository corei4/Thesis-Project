import React, { Component } from 'react'
import SubCharity from './SubCharity';


import $ from "jquery";
import {
  Row
} from 'reactstrap';


class AllCharities extends Component {
  constructor(props) {
    super(props)
    this.state = {
      test: [],
      search: "",
    }
  }
  componentDidMount() {
    $.ajax({
      url: '/charities',
      dataType: 'json',
      type: "GET",
      success: function (data) {
        console.log(data, "app in ajax ")
        this.setState({
          test: data

        })
        console.log("all charities", this.state.test)
        return data;
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }
  updateSearch = (e) => {
    this.setState({
      search: e.target.value.substr(0, 20)
    })
    console.log(e.target.value)
    console.log(this.state.test.name)
  }
  updateSearch = (e) => {
    this.setState({
      search: e.target.value.substr(0, 20)
    })
    console.log(e.target.value)
    console.log(this.state.test.name)
  }

  render() {
    let filteredItem = this.state.test.filter((item) => {
      return item.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    });
    return (
      <div className="container">
        <input type="text" placeholder="search here for any charity" value={this.state.search} onChange={this.updateSearch} />
        <div>
          <Row>
            <div>
              {filteredItem.map(item => (
                < SubCharity key={item.id} item={item} legendPosition="bottom" />
              ))}
            </div>
          </Row>
        </div>
      </div>
    )
  }

}
export default AllCharities;