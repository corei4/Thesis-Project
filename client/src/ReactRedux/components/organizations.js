import React, { Component } from 'react'
import $ from "jquery";
import { Card, CardText, CardBody,
CardTitle, CardSubtitle, Row, Col} from 'reactstrap';

class organizations extends Component {
constructor(props) {
super(props)
this.state = {
// modal: false,
test : []

};
}

componentDidMount() {
// console.log("here")
$.ajax({
url: '/userOrganizations',
dataType: 'json',
type: "GET",
// data: JSON.stringify({"owner_id": 2}),
success: function(data) {
console.log(data,"/*/*/*/*/*/*/*/ in componentDidMountcomponentDidMountcomponentDidMount ")
this.setState({
test: data
})
return data;
}.bind(this),
error: function(xhr, status, err) {
console.error(this.props.url, status, err.toString());
}.bind(this)
});
// window.location.reload()
}

render() {

return (
// <div>
<Row>
{this.state.test.map(item => (
<Col sm='3' key ={item.userId}>
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

)
}
}
export default organizations;