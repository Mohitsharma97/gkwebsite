import React,{useState} from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
const CardExample = (props) => {

  return (
<>
    <MDBCol  style={{ padding:1}}>
      <MDBCard style={{ width: "20rem"}}>
        <MDBCardImage className="img-fluid" src={props.image} waves />
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
        
          <MDBBtn >MDBBtn</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
   
    </>
  )
}

export default CardExample;