import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBInput
} from "mdbreact";

const FormPage = () => {
  return (
    
     
          <MDBCard >
            <MDBCardBody>
              <MDBCardHeader className="form-header deep-blue-gradient rounded">
                <h3 className="my-0">
                  <MDBIcon icon="paper-plane" /> Contact US:
                </h3>
              </MDBCardHeader>
              <form>
                <div className="grey-text">
                <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
            success="right" />
                  <MDBInput
                    label="Type your number"
                    icon="phone-alt"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
               <MDBInput type="textarea" rows="2" label="Your Address" icon="pencil-alt" />
                </div>

              <div className="text-center mt-4">
              <MDBBtn outline color="secondary">
            Send
            <MDBIcon far icon="paper-plane" className="ml-1" />
          </MDBBtn>
              </div>
              </form>

            </MDBCardBody>
          </MDBCard>
      
    
  );
};

export default FormPage;