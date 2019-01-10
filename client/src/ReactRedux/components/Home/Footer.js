import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";
import { Link, withRouter } from 'react-router-dom';

class FooterPage extends React.Component {
	render() {
		return (
			<Footer color="purple darken-4" className="font-small pt-4 mt-4">
				<Container fluid className="text-center text-md-left">
					<Row>
						<Col md="6">
							<h5 className="title">Charitable</h5>
							<p>
								Charitable is a web platform that encourages people and organizations to promote charities all around the world.
      				</p>
						</Col>
						<Col md="6">
							<h5 className="title">For Charities</h5>
							<ul>
								<li className="list-unstyled">
									<Link to="/Signup">Join Charitable</Link>
								</li>
								<li className="list-unstyled">
									<Link to="/Signin">Log in to your account</Link>
								</li>
								<li className="list-unstyled">
									<Link to="/AllCharities">View all charities</Link>
								</li>
							</ul>
						</Col>
					</Row>
				</Container>
				<div className="footer-copyright text-center py-3">
					<Container fluid>
						&copy; {new Date().getFullYear()} Copyright:{" "}
						<a href="https://charitablei4.herokuapp.com/"> Charitable.com </a>
					</Container>
				</div>
			</Footer>
		);
	}
}

export default withRouter(FooterPage);