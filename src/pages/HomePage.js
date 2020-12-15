import React,{useState} from 'react';
import Navbar from '../CommonComponents/navbar';
import CustomNavbar from '../CommonComponents/customNavbar';
import Carousel from '../CommonComponents/carousel';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SingleLineGridList from '../CommonComponents/singleGridList';
import SingleLineGridList2 from '../CommonComponents/SingleLineGridList2';
import Footer from '../CommonComponents/Footer';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Example from '../CommonComponents/search';
import DropdownExampleSearchSelectionTwo from '../CommonComponents/Dropdown';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import IframePage from '../CommonComponents/IframePage';
import BlogPage from './BlogPage';
import FooterPage from '../CommonComponents/FooterPage';
function HomePage() {
  
  
  const  width  = window.innerWidth;
  console.log(width);
  const matches = useMediaQuery('(min-width:768px)');
  
  let navBar
  if(matches){
    navBar=<Navbar/>
  }else{
    navBar= <>
    <CustomNavbar/>
    <div style={{marginTop:16}}>
    <MDBRow >
    <DropdownExampleSearchSelectionTwo />
    <Example/>
    </MDBRow>
    </div>
    </>
  }
  return (
<>
{navBar}
<div style={{marginTop:65}}>
<Jumbotron fluid  style={{ backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)`,height:450 }}>

<MDBContainer>
<MDBRow >
<MDBCol size="6" >
    <h1>Fluid jumbotro</h1>
    <p>
  
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
    </p>
    <div style={{marginTop:120}}>
    <MDBRow  >
    <MDBCol size="4">
   
    <DropdownExampleSearchSelectionTwo />
    </MDBCol>
    <MDBCol size="2">
    <div style={{marginLeft:20}}>
    <Example shape="huge"/>
    </div>
    </MDBCol>
   </MDBRow>
   </div>
  

    </MDBCol>
    <MDBCol size="6">
      <div style={{ width: 660, height: 'auto' }}>
       
        
       
</div>
</MDBCol>
   
</MDBRow>
   

    </MDBContainer>
</Jumbotron>

</div>
 Trending Categories
<div style={{margin:10}}>
<SingleLineGridList/>
</div>
Consultant
<div style={{margin:10}}>
<SingleLineGridList2/>
</div>
Consultant
<div style={{margin:10}}>
<SingleLineGridList2/>
</div>
Consultant
<div style={{margin:10}}>
<SingleLineGridList2/>
</div>

<div class="container">
<BlogPage/>
</div>
<Footer style={{margin:10}}/>
<FooterPage style={{margin:10}}/>
</>
  );
}

export default HomePage;
