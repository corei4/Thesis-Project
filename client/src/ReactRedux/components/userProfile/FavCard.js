import React from 'react';
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Row, Col, Container
} from 'reactstrap';
import PropTypes from 'prop-types';
import './style.css';
import $ from "jquery";

class FavCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toggle: false
    }
  }
  handleRemove = (event) => {
    console.log("removeBTN", event.target.id)
    const target = event.target;
    const id = JSON.parse(target.id);
    $.ajax({
      type: "DELETE",
      url: "/delCharities", /* THIS URL IS CALLING CORRECTLY ie. /items/8 */
      dataType: "text",
      data: {id:id},
      success: function(response) {
          console.log("successfully deleted");
          // return ;
          console.log('response', response)
        //   if (response === true) {
        //     for(var i = 0; i < this.props.item.length; i++) {
        //     if(this.props.item[i].id == id) {
        //       console.log('index', i)
        //       this.props.item.splice(i, 1);
        //         break;
        //     }
        // }
        //   } 
          
      }.bind(this)
  });
  // window.location.reload()
  }
  render() {
      return (
            <Col sm='3'>
              <Card body>
              <CardBody>
                <CardTitle>{this.props.item.name}</CardTitle>
                <CardSubtitle>{this.props.item.name}</CardSubtitle>
              </CardBody>
              <img width="100%" src={this.props.item.image} alt="Card image cap" />
              <CardBody>
                <CardText>{this.props.item.name}</CardText>
                <CardText>{this.props.item.description}</CardText>
                <CardText>{this.props.item.amount}</CardText>
                <CardText>{this.props.item.location}</CardText>
                <button href="#" id={this.props.item.id} onClick={this.handleRemove}>Remove</button>
                <button href="#" id={this.props.item.id} onClick={this.handleRemove}>Edit</button>
              </CardBody >
              </Card>
              </Col>
      );
    }
};




Container.propTypes = {
  fluid: PropTypes.bool
  // applies .container-fluid class
}

Row.propTypes = {
  noGutters: PropTypes.bool,
  // see https://reactstrap.github.io/components/form Form Grid with Form Row
  form: PropTypes.bool
}


const stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
const columnProps = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.bool,
  PropTypes.shape({
    size: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
    // example size values:
    // 12 || "12" => col-12 or col-`width`-12
    // auto => col-auto or col-`width`-auto
    // true => col or col-`width`
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
  // see https://github.com/reactstrap/reactstrap/issues/297#issuecomment-273556116
  widths: PropTypes.array,
}



export default FavCard;