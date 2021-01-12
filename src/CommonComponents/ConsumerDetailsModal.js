import React, { Component } from "react";
import { MDBAlert ,MDBContainer,  MDBInput, MDBBtn, MDBModal, MDBModalHeader, MDBModalBody, MDBIcon } from "mdbreact";
import {Link} from 'react-router-dom';
class ConsumerDetailsModal extends Component  {
    
    state={
        cName:"",
        cNumber:"",
        error:false
      }

  submitDetails=()=>{
   
      if(this.state.cName.length<3||this.state.cNumber.length!=10){
          this.setState({
              error:true
          })
      }else{
        this.props.switchModal();
    
        console.log(this.state.cName+"  "+this.state.cNumber)
      }
  }
    render() {  
        
        let errorMessage;
      if(this.state.error){
        errorMessage=<MDBAlert color="danger" >
        Please!! Enter Valid Name And Number
    </MDBAlert>
      }
      return (
        <MDBContainer>
        
          <MDBModal
          backdrop={true}
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
              Enter Details
            </MDBModalHeader>
            <MDBModalBody>
            <div className="grey-text">
            <MDBInput onChange={event => this.setState({cName:event.target.value})} label="Your name" icon="user" group type="text" validate error="wrong"
            success="right" />
            <MDBInput onChange={event => this.setState({cNumber:event.target.value})} label="Contact Number" icon="phone-alt" group type="number" validate error="wrong"
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

export default ConsumerDetailsModal;
