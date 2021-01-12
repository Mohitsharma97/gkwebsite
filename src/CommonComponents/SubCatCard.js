import React from 'react'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
function SubCatCard(props) {
 
        return (
      
            <MDBCol>
            <MDBCard style={{ width: "22rem" }}>
              <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
              <MDBCardBody>
                <MDBCardTitle>{props.subCatName}</MDBCardTitle>
              
                <MDBBtn href="#">MDBBtn</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
            
          );
    
}

export default SubCatCard
