import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import FileBase64 from "react-file-base64";
import FavCard from "./FavCard.js";
import {
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { TabContent, TabPane, Card, CardTitle, CardText } from "reactstrap";
import classnames from "classnames";

import $ from "jquery";
import UserInfo from "./UserInfo.js";
import Pagination from "./Pagination";
import Tabs from "./tabs.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    //var result = getAllCh();

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
      image: "",
      activeTab: "1",
      modalEP: false,
      email: window.localStorage.getItem('email'),
      firstName: window.localStorage.getItem('firstName'),
      lastName: window.localStorage.getItem('lastName'),
      telephone: window.localStorage.getItem('telephone'),
      imgUrl: window.localStorage.getItem('imgUrl'),
    };
    this.toggle = this.toggle.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangePage = this.onChangePage.bind(this);
  }
  componentDidMount() {
    console.log()
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

  toggleTab = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };
  toggleEP = () => {
    this.setState({
      modalEP: !this.state.modalEP
    });
  };

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
    // email: "azzttt@azzttt"
    // firstName: "azz"
    // id: "10"
    // length: 4
    // telephone: "1234567"
    console.log("charityObj: ", charityObj);
    $.ajax({
      url: "/addCharities",
      type: "POST",
      data: JSON.stringify(charityObj),
      contentType: "application/json",
      success: function (data) {
        console.log("ad charities in Db", data);
      },
      error: function (error) {
        console.error("errorrrrrr/*/*/*/*/*/*/*/*/*/", error);
      }
    });
    // window.location.reload();
  }

  // Post request to edit profile
  handleSubmitEP = () => {
    this.toggleEP();
    console.log("handleSubmit");
    const profileObj = {
      firstName: this.state.name,
      lastName: this.state.amount,
      phoneNumber: this.state.phoneNumber,
      image: this.state.image
    };

    console.log("profileObj: ", profileObj);
    $.ajax({
      url: "/editUserInfo",
      type: "PUT",
      data: JSON.stringify(profileObj),
      contentType: "application/json",
      success: function(data) {
        console.log("ad charities in Db", data);
      },
      error: function(error) {
        console.error("errorrrrrr", error);
      }
    });
    // window.location.reload();
  };
  // Post request to edit profile

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  }

  // handleInputChangeEP(event) {
  //   const target = event.target;
  //   const name = target.name;
  //   const value = target.value;
  //   this.setState({
  //     [name]: value
  //   });
  // }

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
      <div class="container-fluid">
        <div>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "1" })}
                onClick={() => {
                  this.toggleTab("1");
                }}
              >
                Profile
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "2" })}
                onClick={() => {
                  this.toggleTab("2");
                }}
              >
                Donations
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "3" })}
                onClick={() => {
                  this.toggleTab("3");
                }}
              >
                Charities
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  {/* <h4>Tab 1 Contents</h4> */}

                  <div class="card text-center">
                    <div class="card-header">
                      <div className="card-body" id="profile">
                        <div>
                          <img
                            src={this.state.imgUrl}
                            alt="User"
                            height="none"
                          />
                        </div>
                        <div />
                        <h4 class="card-title">
                          {" "}
                          <strong>{this.state.firstName}</strong>{" "}
                        </h4>
                        <h5 class="card-text"> {this.state.email} </h5>
                        <h5 class="card-text"> {this.state.telephone} </h5>
                        
                        <Button class="btn btn-success" onClick={this.toggleEP}>
                          {this.props.buttonLabel}
                          Edit profile
                        </Button>
                        <a href="#" class="btn btn-primary">
                          Become an O rganization
                        </a>

                        {/* modal add charity */}
                        <Button class="btn btn-success" onClick={this.toggle}>
                          {this.props.buttonLabel}
                          Add Charity
                        </Button>
                        <Modal
                          isOpen={this.state.modal}
                          toggle={this.toggle}
                          className={this.props.className}
                        >
                          <ModalHeader toggle={this.toggle}>
                            Add Charities
                          </ModalHeader>
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
                                  onChange={this.handleInputChange}
                                />
                              </div>
                              <div class="form-group">
                                <label for="exampleInputPassword1">
                                  Amount
                                </label>
                                <input
                                  type="number"
                                  name="amount"
                                  id="amount"
                                  placeholder="input amount"
                                  value={this.state.amount}
                                  onChange={this.handleInputChange}
                                />
                              </div>
                              <div class="form-group">
                                <label for="exampleInputPassword1">
                                  Description
                                </label>
                                <input
                                  type="text"
                                  name="description"
                                  id="description"
                                  placeholder="input description"
                                  value={this.state.description}
                                  onChange={this.handleInputChange}
                                />
                              </div>
                              <FileBase64
                                multiple={true}
                                onDone={this.getFiles.bind(this)}
                              />
                              <div class="form-group">
                                <label for="exampleInputPassword1">
                                  Location
                                </label>
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
                                {/* <label class="form-check-label" for="exampleCheck1">
                  Check me out
                </label> */}
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

                            {/* name, amount, description, location, owner_id */}
                          </ModalBody>
                          <ModalFooter />
                        </Modal>
                        {/* modal add charity */}



                        {/* modal edit profil */}

                        <Modal
                          isOpen={this.state.modalEP}
                          toggle={this.toggleEP}
                          className={this.props.className}
                        >
                          <ModalHeader toggle={this.toggleEP}>
                            Edit Profile
                          </ModalHeader>
                          <ModalBody>
                            {/* <input type="text"/>
           <input type="text"/> */}

                            <form>
                              <div class="form-group">
                                <label for="exampleInputEmail1">
                                  First Name
                                </label>
                                <input
                                  type="text"
                                  name="firstName"
                                  id="firstName"
                                  value={this.state.firstName}
                                  onChange={this.handleInputChangeEP}
                                />
                                {/* <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small> */}
                              </div>
                              <div class="form-group">
                                <label for="exampleInputPassword1">
                                  Last Name
                                </label>
                                <input
                                  type="text"
                                  name="lastName"
                                  id="lastName"
                                  value={this.state.lastName}
                                  onChange={this.handleInputChangeEP}
                                />
                              </div>
                              <div class="form-group">
                                <label for="exampleInputPassword1">
                                  Phone Number
                                </label>
                                <input
                                  type="number"
                                  name="PhoneNumber"
                                  id="PhoneNumber"
                                  
                                  value={this.state.telephone}
                                  onChange={this.handleInputChangeEP}
                                />
                              </div>
                            
                              <Button
                                color="primary"
                                onClick={this.handleSubmitEP}
                                disabled={this.state.isNotUpload}
                              >
                                Submit
                              </Button>{" "}
                              <Button color="secondary" onClick={this.toggleEP}>
                                Cancel
                              </Button>
                            </form>

                            {/* name, amount, description, location, owner_id */}
                          </ModalBody>
                          <ModalFooter />
                        </Modal>

                        {/* modal edit profil */}


                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <h2>here donations for user as component</h2>
            </TabPane>
            <TabPane tabId="3">
              <Tabs />
            </TabPane>
          </TabContent>
        </div>
      </div>
    );
  }
}

export default UserProfile;
