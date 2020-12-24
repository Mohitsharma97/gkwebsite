import React, { Component } from "react";
import { MDBContainer,  MDBInput, MDBBtn, MDBModal, MDBModalHeader, MDBModalBody, MDBIcon } from "mdbreact";


class CategoryModal extends Component  {
    
  
    logValue = value => {
      console.log(value);
    };
  
    render() {
      return (
        <MDBContainer>
        
          <MDBModal
            isOpen={this.props.modal}
            toggle={this.props.toggle}
            size="md"
            cascading
          >
            <MDBModalHeader
              toggle={this.props.toggle}
              titleClass="d-inline title"
              className="text-center light-blue darken-3 white-text"
            >
              <MDBIcon icon="pencil-alt" />
              Contact From
            </MDBModalHeader>
            <MDBModalBody>
              <MDBInput label="Your name"  />
              <MDBInput label="Your email"  iconClass="dark-grey" />
              <MDBInput label="Subject" />
              <MDBInput
                label="Your message"
                type="textarea"
                rows="2"
                icon="pencil-alt"
                iconClass="dark-grey"
              />
              <div className="text-center mt-1-half">
                <MDBBtn
                  color="info"
                  className="mb-2"
                  onClick={this.props.toggle}
                >
                  send
                  <MDBIcon icon="paper-plane" className="ml-1" />
                </MDBBtn>
              </div>
            </MDBModalBody>
          </MDBModal>
        </MDBContainer>
      );
    }
  }

export default CategoryModal;