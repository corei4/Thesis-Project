import React from 'react';
import axios from 'axios';
// import organizations from '../organizations';

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    var exampleItems = [{ id: 1, name: "Wait to fetch data" }]
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      exampleItems: []
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
    if (this.state.exampleItems) {
      console.log(this.state.exampleItems, 'skajdhaskdhj')
      return (
        <div>
          {this.state.exampleItems !== [] && this.state.exampleItems.map(item => {
            return (
              <organizations item={item} />
            )
          }
          )}
        </div>
      )
    } else {
      return (
        <div>akhdkjashdjk</div>
      )
    }

  }
}