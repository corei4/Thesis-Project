import React, { Component, Fragment } from 'react'
import SubCharity from './SubCharity';

import SearchInput, {createFilter} from 'react-search-input'
import SearchField from "react-search-field";
import $ from "jquery";
import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Row, Col, Container
  } from 'reactstrap';
// import emails from './mails'
 
// const KEYS_TO_FILTERS = ['user.name', 'subject', 'dest.name']

class AllCharities extends Component {
    constructor (props) {
        super(props)
        this.state = {
            test: [],
            search:"",
        }
      }
      componentDidMount() {
        var charAll = $.ajax({
          url: '/charities',
          dataType: 'json',
          type: "GET",
          success: function (data) {
            console.log(data, "app in ajax ")
            this.setState({
              test: data
              
            })
            console.log("all charities",this.state.test)
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
     
      render () {
        let filteredItem = this.state.test.filter((item) => {
            return item.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        });
        return (
         <div className="container">
            
           {/* <div class="row justify-content-center">
             <SearchField />
           </div> */}
           <input type="text" placeholder="search here for any charity" value={this.state.search} onChange={this.updateSearch}/>
           <div>
          <Row>
            <div>
              {filteredItem.map(item => (
                < SubCharity key={item.id} item={item}  legendPosition="bottom"/>
              ))}
            </div>
          </Row>
        </div>
         </div>


        )
      }
     
}
export default AllCharities;