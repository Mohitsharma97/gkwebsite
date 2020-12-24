import React from 'react';

import Navbar from '../CommonComponents/navbar';
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput
} from 'mdbreact';
import './FeedbackPage.css';
import Footer from '../CommonComponents/Footer';
import FooterPage from '../CommonComponents/FooterPage';
class FeedbackPage extends React.Component {
  state = {
    collapseID: ''
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));

  componentDidMount() {
   
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
   
  }

  render() {

    return (
        <>
        <Navbar/>
      <div id='contactformpage'>
     

        <MDBView>
          <MDBMask overlay='indigo-strong' />
          <MDBContainer
            style={{ height: '100%', width: '100%', paddingTop: '10rem' }}
            className='d-flex justify-content-center align-items-center'
          >
            <MDBRow>
              <div className='white-text text-center text-md-left col-md-6 mt-xl-5 mb-5'>
                <h1 className='display-4 font-weight-bold'>Lorem ipsum </h1>
                <hr className='hr-light' />
                <h6 className='mb-4'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                  repellendus quasi fuga nesciunt dolorum nulla magnam veniam
                  sapiente, fugiat! Commodi sequi non animi ea dolor molestiae
                  iste.
                </h6>
                <MDBBtn outline color='white'>
                  Learn More
                </MDBBtn>
              </div>
              <MDBCol md='6' xl='5' className='mb-4'>
                <MDBCard className='dark-grey-text'>
                  <MDBCardBody className='z-depth-2'>
                    <h3 className='dark-grey-text text-center'>
                      <strong>Write to us:</strong>
                    </h3>
                    <hr />
                    <MDBInput label='Your name' icon='user' />
                    <MDBInput label='Your email' icon='envelope' />
                    <MDBInput
                      label='Your message'
                      icon='pencil-alt'
                      type='textarea'
                      rows='3'
                    />
                    <div className='text-center mt-3 black-text'>
                      <MDBBtn color='indigo'>Send</MDBBtn>
                      <hr />
                     
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>

        <MDBContainer>
          <MDBRow className='py-5'>
            <MDBCol md='12' className='text-center'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <Footer style={{margin:10}}/>
<FooterPage style={{margin:10}}/>
      </div>
      </>
    );
  }
}

export default FeedbackPage;