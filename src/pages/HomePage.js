
import './HomePage.css';
import D from '../images/D.jpg'
import AboutPage from './AboutPage'
import React,{useState,useEffect} from 'react';
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
  
    
  let [categorydata,setCategoryData] = useState();
  let [city,setCity]=useState();
  const  width  = window.innerWidth;
  console.log(width);
  const matches = useMediaQuery('(min-width:768px)');
  const searchmatches = useMediaQuery('(min-width:1072px)');
  let colsize;
  let navBar;
  if(matches){
    navBar=<Navbar/>
  }else{
    navBar= <CustomNavbar/>
  }
  if(searchmatches){
    colsize="2"
  }else{
    colsize="3"
  }
 
  let selctCity = (e)=>{
    setCity(e.target.value);
  }
  async function getdata(){
   await fetch('http://localhost:3001/categoriesdata')
  .then(response => response.json())
  .then(data =>{
    setCategoryData(data)
  }) ;
  }

  useEffect(()=>{
  getdata();
  },[]);
  let karigar=[];
  let contractor=[];
  let consultant=[];
  let productSupplier=[];
  let cityList=[];
  if(categorydata){
    karigar=categorydata.karigar;
    contractor=categorydata.contractor;
    consultant=categorydata.consultant;
    productSupplier=categorydata.productSupplier;
    cityList=categorydata.citylist;
  }
    console.log(city);
  return (
<>
{navBar}
<div className="jumbomargin">
<Jumbotron fluid  style={{    backgroundImage:`url(${require("../images/room-3.jpeg")})`,height:450 }}>

<MDBContainer>
<MDBRow >
<MDBCol size="6" >
    <h1 style={{color:"black"}}>Fluid jumbotro</h1>
    
    <div style={{marginTop:95}}>
    
    <MDBRow  >
    <MDBCol  size={colsize}>
   <div style={{marginLeft:10}} className="dropspace">
    <Asynchronous citylist={cityList} selctCity={selctCity}/>
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
{width}
</div>

<h1 className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center text">Trending Categories</h1>
<div >
<SingleLineGridList/>
</div>

<h1 className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center text">Consultant</h1>
<div style={{margin:10 ,paddingLeft:15}}>
<SingleLineGridList2 cityList={cityList} catData = {consultant}/>
</div>

<h1 className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center text">Karigar</h1>

<div style={{margin:10,paddingLeft:15}}>
<SingleLineGridList2 cityList={cityList} catData = {karigar}/>
</div>

<h1 className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center text">Product Supplier</h1>
<div style={{margin:10,paddingLeft:15}}>
<SingleLineGridList2 cityList={cityList} catData = {productSupplier}/>
</div>

<h1 className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center text">Contractor</h1>
<div style={{margin:10,paddingLeft:15}}>
<SingleLineGridList2 cityList={cityList} catData = {contractor}/>
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
