import React from 'react';
import { Card, CardBody,
  CardTitle, CardSubtitle, Row, Col, Container} from 'reactstrap';
import PropTypes from 'prop-types';
import './style.css';

var exampleUser = {
	id: 3,
        name: "Mary Joy Nebres",
        job: "Software Engineer",
    		address: "Hacker Haus, Amman, Jordan",
    		imgUrl: "https://images.homedepot-static.com/productImages/612ae505-9daf-45c3-ac16-67f97dcb251d/svn/globalrose-flower-bouquets-prime-100-red-roses-64_1000.jpg",
        email: "qusay@yahoo.com",
        phoneNumber: "+962 79642 6783"
    	};

class UserInfo extends React.Component{
  render() {
    console.log(this.props)
      return (
              <Card style={{height: "550px"}}>
                  <Col>
                      <CardBody>
                            <div className="imgdiv" >
                                <img style={{ width: "30%"}} className="userImage"  src={exampleUser.imgUrl} alt="User" />
                            </div>
                          <CardTitle>Profile</CardTitle>
                          <CardSubtitle><span><b>Name</b><p id="info" >{exampleUser.name}</p></span></CardSubtitle>
                          <CardSubtitle><span><b>Email</b> <p id="info" >{exampleUser.email}</p ></span></CardSubtitle>
                          <CardSubtitle><span><b>Phone Number</b><p id="info" >{exampleUser.phoneNumber}</p ></span></CardSubtitle>
                          <button className="edit" href="#">Edit</button>
                      </CardBody>
                  </Col>
              </Card>  
      );
    }
};





Container.propTypes = {
  fluid:  PropTypes.bool
  // applies .container-fluid class
}

Row.propTypes = {
  noGutters: PropTypes.bool,
  form: PropTypes.bool
}


const stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
const columnProps = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.bool,
  PropTypes.shape({
    size: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
    order: stringOrNumberProp,
    offset: stringOrNumberProp
  })
]);

Col.propTypes = {
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  // override the predefined width (the ones above) with your own custom widths.
  widths: PropTypes.array,
}



export default UserInfo;