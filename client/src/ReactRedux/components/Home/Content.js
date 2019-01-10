import React from 'react';
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";

class Content extends React.Component {
  render() {
    return (
      <MDBContainer>
        <h4 style={{ textAlign: 'center', paddingTop: '20px', paddingBottom: '15px' }}>Ideas to get you started</h4>
        <MDBRow>
          <MDBCol style={{ textAlign: 'center' }}>Column</MDBCol>
          <MDBCol style={{ textAlign: 'center' }}>Column</MDBCol>
          <div className="w-100" />
          <MDBCol style={{ textAlign: 'center' }}>Column</MDBCol>
          <MDBCol style={{ textAlign: 'center' }}>Column</MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  }
}
// style={{ margin: '0 auto', paddingTop: '20px' }}
export default Content;
