import React,{useState} from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import './Categorycard.css';
const CardExample = (props) => {

  return (
<>
    <MDBCol  style={{ padding:1}}>
      <MDBCard className="catcard">
        <MDBCardImage className="img-fluid" src={props.image} waves />
        <MDBCardBody>
          <MDBCardTitle>{props.cardTitle}</MDBCardTitle>
        
          <MDBBtn >MDBBtn</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
   
    </>
  )
}

export default CardExample;