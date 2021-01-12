import React, { Component } from "react";
import { MDBAlert ,MDBContainer,  MDBInput, MDBBtn, MDBModal, MDBModalHeader, MDBModalBody, MDBIcon } from "mdbreact";
import {Link} from 'react-router-dom';
class otpModal extends Component  {
    
    state={
        otp:"",
        error:false
      }

  submitDetails=()=>{
   
      if(this.state.otp.length!=4){
          this.setState({
              error:true
          })
      }else{

        console.log(this.state.otp)
      }
  }
    render() {  
        
        let errorMessage;
      if(this.state.error){
        errorMessage=<MDBAlert color="danger" >
        Please!! Enter Valid 4-digits OTP
    </MDBAlert>
      }
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
              <MDBIcon />
              Enter OTP
            </MDBModalHeader>
            <MDBModalBody>
            <div className="grey-text">
            <MDBInput onChange={event => this.setState({otp:event.target.value})} label="Your name" icon="user" group type="text" validate error="wrong"
            success="right" />
          
            </div>
           
              <div className="text-center mt-1-half">
              
                <MDBBtn
                  color="info"
                  className="mb-2"
                  onClick={this.submitDetails}
                >

                  Submit
                  <MDBIcon icon="paper-plane" className="ml-1" />
                </MDBBtn>
              
              </div>
              {errorMessage}
            </MDBModalBody>
           
          </MDBModal>
        </MDBContainer>
      );
    }
  }

export default otpModal;
