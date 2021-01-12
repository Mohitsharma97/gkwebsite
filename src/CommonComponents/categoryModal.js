import React, { Component } from "react";
import { MDBAlert ,MDBContainer,  MDBInput, MDBBtn, MDBModal, MDBModalHeader, MDBModalBody, MDBIcon } from "mdbreact";
import SubCategoryDropdown from './SubCategoryDropdown';
import CityDropdown from './CityDropdown';
import {Link} from 'react-router-dom';
class CategoryModal extends Component  {
    
  
    logValue = value => {
      console.log(value);
    };
    state={
      subCategory:"",
      city:"",
      error:false,
    }
    

    
  
    render() {

      let errorMessage;
      if(this.state.error){
        errorMessage=<MDBAlert color="danger" >
        Please!! Select City & Sub-Category
    </MDBAlert>
      }

      let selectCity = e =>{
        this.setState({
          city:e.target.value
        })
      }
      let selectSubCat = e => {
        this.setState({
          subCategory:e.target.value
        })
      };
  
     const btnClick = (e)=>{
      if(this.state.subCategory==""||this.state.city=="")
      e.preventDefault()
      this.setState({
        error:true
      })
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
              <MDBIcon icon="pencil-alt" />
              {this.props.modalTitle}
            </MDBModalHeader>
            <MDBModalBody>
              <div>
              <CityDropdown cityList={this.props.cityList} selectCity={selectCity} />
              </div>
              <div style={{marginTop:10}}>
              <SubCategoryDropdown subCategory={this.props.subCategory.subcategory} selectSubCat={selectSubCat}/>
              </div>
           
              <div className="text-center mt-1-half">
              <Link to={{pathname:'/'+this.props.catUrl+'/'+this.state.subCategory+'/'+this.state.city,data:"data"}} onClick={btnClick}>
                <MDBBtn
                  color="info"
                  className="mb-2"
                  
                >
                  send
                  <MDBIcon icon="paper-plane" className="ml-1" />
                </MDBBtn>
                </Link>
              </div>
              {errorMessage}
            </MDBModalBody>
              
          </MDBModal>
        </MDBContainer>
      );
    }
  }

export default CategoryModal;