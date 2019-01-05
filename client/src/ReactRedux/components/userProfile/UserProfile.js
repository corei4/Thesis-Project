import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import FileBase64 from "react-file-base64";
import $ from "jquery";
import UserInfo from "./UserInfo.js";
import Tabs from './tabs.js'
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";


class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    var result = [{ id: 1, name: "Azhar" }];
    var exampleItems = result.map(i => ({
      id: i.id,
      name: i.name
    }));
    this.state = {
      exampleItems: exampleItems,
      pageOfItems: [],
      modal: false,
      test: [],
      value: "",
      files: [],
      isNotUpload: true,
      image: ""
    };
    this.toggle = this.toggle.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangePage = this.onChangePage.bind(this);
  }
  componentDidMount() {
    var data = { owner_id: 1 };
    console.log("here owner_id: 1", data);
    var charAll = $.ajax({
      url: "/userCharities",
      type: "POST",
      data: JSON.stringify(data),
      contentType: "application/json",
      success: function (data) {
        console.log(data, "/charities/charities/charities/charities");
        this.setState({
          test: data
        });
        return data;
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleSubmit() {
    this.toggle();
    // console.log("handleSubmit");
    const charityObj = {
      name: this.state.name,
      amount: this.state.amount,
      description: this.state.description,
      location: this.state.location,
      owner_id: 1,
      image: this.state.image
    };
    $.ajax({
      url: "/addCharities",
      type: "POST",
      data: JSON.stringify(charityObj),
      contentType: "application/json",
      success: function (data) {
        console.log("ad charities in Db", data);
      },
      error: function (error) {
        console.error("errorrrrrr", error);
      }
    });
    window.location.reload();
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  }
  getFiles(files) {
    this.setState({ files: files[0].base64 });
    var baseStr = files[0].base64.substr(22);
    console.log("files new: ", baseStr);

    $.ajax({
      url: "https://api.imgur.com/3/image",
      type: "POST",
      data: JSON.stringify(baseStr),
      headers: {
        Authorization: "Client-ID 0d9a88ca2265606"
      },
      contentType: "undefined",
      success: data => {
        console.log("image uploaded", data.data.link);
        this.setState({
          isNotUpload: false,
          image: data.data.link
        });
      },
      error: function (error) {
        console.error("image not uploaded", error);
      }
    });
  }
  onChangePage(pageOfItems) {
    this.setState({ pageOfItems: pageOfItems });
  }
  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>
          {this.props.buttonLabel}
          Add Charity
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add Charities</ModalHeader>
          <ModalBody>
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="input the name of charity"
                  value={this.state.name}
                  onChange={this.handleInputChange} />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Amount</label>
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  placeholder="input amount"
                  value={this.state.amount}
                  onChange={this.handleInputChange} />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Description</label>
                <input
                  type="text"
                  name="description"
                  id="description"
                  placeholder="input description"
                  value={this.state.description}
                  onChange={this.handleInputChange}
                />
              </div>
              <FileBase64 multiple={true} onDone={this.getFiles.bind(this)} />
              <div class="form-group">
                <label for="exampleInputPassword1">Location</label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  placeholder="input location"
                  value={this.state.location}
                  onChange={this.handleInputChange}
                />
              </div>
              <div class="form-group form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
              </div>
              <Button
                color="primary"
                onClick={this.handleSubmit}
                disabled={this.state.isNotUpload}
              >
                Submit
              </Button>{" "}
              <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>
            </form>

          </ModalBody>
          <ModalFooter />
        </Modal>

        <UserInfo />
        <Tabs />
      </div>
    );
  }
}

export default UserProfile;
