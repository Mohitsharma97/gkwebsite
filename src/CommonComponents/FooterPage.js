import React from "react";
import "./FooterPage.css";
import {Link} from 'react-router-dom';
function FooterPage() {
  return (
    <div className="order-2 order-lg-1">
    
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
          <a class="logo" href="/">
		                        <img  style={{width:200}} src="https://www.getkarigar.com/img/logo.png" alt="GetKarigar"/>
		                    </a>
                        <hr/>
            <h5 className="list-unstyled" style={{fontFamily:"sans-serif"}} >
            We proudly announced ourselves as India’s first karigar website where anyone can find building technicians in just one click
              </h5>
          </div>
          {/* Column2 */}
          <div className="col" id="a" >
            <h3>ABOUT US</h3>
            
            <ui className="list-unstyledo" id="i">
              <br/>
              <Link to={{pathname:'/page/aboutCompany',data:"data"}}><h6>About Company</h6></Link>
              <Link to={{pathname:'/page/Careerpage' ,data:"data"}}> <h6> Jobs & Career</h6></Link>
              <Link to={{pathname:'/page/contactus' ,data:"data"}}> <h6>Contact Us</h6></Link>
              <Link to={{pathname:'/page/feedback' ,data:"data"}}> <h6>Partner With Us</h6></Link>
            </ui>
          </div>
          <div className="col" id="w">
            <h3> SERVICES</h3>
            <ui className="list-unstyled">
              <br/>
              <Link to={{pathname:'/page/advertise' ,data:"data"}}> <h6 style={{color:"black"}} >  Advertise With Us</h6></Link>
              <Link to={{pathname:'/about/Post your requirement' ,data:"data"}}><h6> Post Your Requirement</h6></Link>
              <Link to={{pathname:'/about/Complaint' ,data:"data"}}>  <h6 style={{color:"black"}} >Complaint</h6></Link>
              <Link to={{pathname:'/page/feedback' ,data:"data"}}>  <h6 style={{color:"black"}} >Send Feedback</h6></Link>
            </ui>
          </div>
          



          {/* Column3 */}
          <div className="col-md-2">
            <h4>TOP CITY</h4>
            <ui className="list-unstyled">
              <br/>
             <h6 style={{color:"black"}}>Noida</h6>
            
           <h6> <a href="default.asp" target="_blank" style={{color:"black"}}>Ghaziabad</a></h6>
            
           <h6> <a href="default.asp" target="_blank" style={{color:"black"}}>Gurgaon</a></h6>
            
          <h6>  <a href="default.asp" target="_blank" style={{color:"black"}}>Faridabad</a></h6>
 
           <h6> <a href="default.asp" target="_blank" style={{color:"black"}}>Delhi</a></h6>
 
            <h6><a href="default.asp" target="_blank" style={{color:"black"}}>Greater Noida</a></h6>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row" >
          
          <p className="col-sm">
            <br/>
           © COPYRIGHT {new Date().getFullYear()} GETCON MEDIA PVT. LTD. ALL RIGHTS RESERVED
Terms Of Use || Privacy Policy
          </p>
        </div>
      </div>
    </div>
</div>
  );
}

export default FooterPage;