import React from 'react';
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
import { Link, withRouter } from 'react-router-dom';
import help2 from "./help2.png";
import help3 from "./help3.png"
import help7 from "./help7.png"
import help6 from "./help6.png"

import {
	Button
} from 'reactstrap';

class Content extends React.Component {
	render() {
		return (
			<div style={{ backgroundColor: "#F2F3F9", width: "100%" }}>
			<hr />
			<MDBContainer >
				<h2 style={{ textAlign: 'center', paddingTop: '20px', paddingBottom: '15px' }}>Ideas to get you started</h2>
				<MDBRow>
					<MDBCol style={{ textAlign: 'center' }}>
						<img src={help2} style={{ boxSizing: "border-box", display: "inline-block", padding: "0px", height: "40%", width: "28%", borderRadius: "60%", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}></img>
						<h4>Help people in need</h4>
						<p>Provide support by giving some extra money you have been saving.</p>
						<Link to="/AllCharities"><Button id="content">Start Fundraising</Button></Link></MDBCol>
					<MDBCol style={{ textAlign: 'center' }}>
						<img src={help3} style={{ boxSizing: "border-box", display: "inline-block", padding: "0px", height: "40%", width: "28%", borderRadius: "60%", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}></img>
						<h4>Participate in a Charity</h4>
						<p>Directly support a charity by chosing one you would like to participate in.</p>
						<Link to="/AllCharities"><Button id="content">Start Fundraising</Button></Link></MDBCol>
					<div className="w-100" />
					<MDBCol style={{ textAlign: 'center' }}>
						<img src={help7} style={{ boxSizing: "border-box", display: "inline-block", padding: "0px", height: "40%", width: "28%", borderRadius: "60%", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}></img>
						<h4>Celebrate those in need</h4>
						<p>Start fundraising for people who have a special occassion but need some help.</p>
						<Link to="/AllCharities"><Button id="content">Start Fundraising</Button></Link></MDBCol>
					<MDBCol style={{ textAlign: 'center' }}>
						<img src={help6} style={{ boxSizing: "border-box", display: "inline-block", padding: "0px", height: "40%", width: "28%", borderRadius: "60%", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}></img>
						<h4>Help out in Emergencies</h4>
						<p>Help people affected by natural disaster or other hard conditions.</p>
						<Link to="/AllCharities"><Button id="content">Start Fundraising</Button></Link></MDBCol>
				</MDBRow>
			</MDBContainer>
			</div>
		)
	}
}
export default withRouter(Content);
