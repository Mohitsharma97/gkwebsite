
import './HomePage.css';
import Blog from './Blog';
import D from '../images/D.jpg'
import AboutPage from './AboutPage'
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
import SearchExampleStandard from '../CommonComponents/search';
import Asynchronous from '../CommonComponents/Asynchronous';
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
    navBar= <CustomNavbar/>
  }
  return (
<>
{navBar}
<div className="jumbomargin">
<Jumbotron fluid  style={{    backgroundImage:`url(${require("../images/room-3.jpeg")})`,height:400 }}>

<MDBContainer>
<MDBRow >
<MDBCol size="6" >
    <h1 style={{color:"black"}}>Fluid jumbotro</h1>
    
    <div style={{marginTop:95}}>
    
    <MDBRow  >
    <MDBCol  size="3">
   <div style={{marginLeft:10}}>
    <Asynchronous />
    </div>
    </MDBCol>
    <MDBCol size="2" >
    <div className="dsspace">
    <SearchExampleStandard shape="large" />
    </div>
    </MDBCol>
   </MDBRow>
   </div>
      </MDBCol>
   
   
</MDBRow>
   
</MDBContainer>
    
</Jumbotron>

</div>

<h1 className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center text">Trending Categories</h1>
<div style={{margin:100}}>
<SingleLineGridList/>
</div>

<h1 className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center text">Consultant</h1>
<div style={{margin:10 ,paddingLeft:15}}>
<SingleLineGridList2/>
</div>

<h1 className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center text">Consultant</h1>

<div style={{margin:10,paddingLeft:15}}>
<SingleLineGridList2/>
</div>

<h1 className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center text">Consultant</h1>
<div style={{margin:10,paddingLeft:15}}>
<SingleLineGridList2/>
</div>



<div style={{margin:25 ,paddingTop:30}}>
<Blog/>
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
