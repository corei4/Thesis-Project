import React from 'react';
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
import { Link, withRouter } from 'react-router-dom';


import {
	Button
} from 'reactstrap';

class Join extends React.Component {
	render() {
		return (
			<div className="center">
				<hr />
			<h2 style={{ textAlign: 'center', paddingTop: '20px', paddingBottom: '15px' }}>Join Charitable and start raising funds for a good cause today!</h2>
			<h3 style={{ textAlign: 'center', paddingTop: '20px', paddingBottom: '15px' }}>Are you ready to get started?</h3>
			<Link to='/Signup'><Button id="join" >Join now</Button></Link>
			</div>
		)
	}
}
export default withRouter(Join);
