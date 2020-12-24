import Footer from '../CommonComponents/Footer';
import FooterPage from '../CommonComponents/FooterPage';
import React from 'react'
import './CareerPage.css'
import Content from './Content'
import web from '../images/x.jpg'
import A from '../images/A.jpg'
import B from '../images/B.jpg'
function CareerPage() {
	return (
		
		<div >
			
			<div class="  row " style={{paddingtop:180}} >
			<img src={web} style={{height:500,width:1500 ,opacity:0.9}} alt="" class=""/>
			</div>
			<Content/>
		
			<section id="services"  style={{paddingBottom:70 ,paddingTop:30}} >
			 
	<section class="bg-light-gray home">
		<div class="container">
        	<div class="row">
			<h2 class="ssize animate__animated animate__lightSpeedInLeft col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center text" style={{fontFamily: "Georgia, serif",fontWeight:600}}>Jobs and Career</h2>
			
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center text" style={{fontFamily: " Lucida Bright" ,fontWeight:600}}>At GetKarigar, you get opportunity to build your career. We are innovative and enthusiastic with what we do and inculcate the same in our employees. You see your self brainstorming on things, reflect on new ideas and help the company grow with you. Freshers are given great exposure to build their own success stories and professionals are given the liberty to contribute their skills in helping the foundation grow. You can join us and be sure of a great start to your career. We believe that everyone is unique and can contribute in building world class services that GetKarigar aims to provide to people and consumers. Join us and see yourself achieve great heights in life.</div>
				<div class="space50 hidden-xs"></div>
				<div class="space30 visible-xs"></div>
				<div id="gridBigImage" class="col-lg-6 col-md-6 col-sm-6 col-xs-12 text-center">
										
									</div>
				<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
					<div id="gridSquareImage" class="row">
						<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 spaceleft">
							<div class="space20 visible-xs"></div>
														<div class="video-wrapper">
								
							</div>
													</div>
						
						
					</div>
				</div>
			</div>
		</div>
	</section>
			<div class="col-md-12" style={{ marginLeft:100 ,paddingTop:40}} >
    <div class="row" ><br/><br/>
    
		
		
		 <div class="ui card" style={{height:350}}>
  <div class="ui slide masked reveal image">
    <img src={A} class="visible content"/>
    <img src={B} class="hidden content"/>
  </div>
  <div class="content">
    <a class="header">IT SERVICES</a>
    
  </div>
  <div class="extra content">
  <form  action="resume" enctype="multipart/form-data" method="post" style={{border:"1" }}>
                <div class="col-md-6">
                			 <div class="form-group animate__animated animate__lightSpeedInLeft">
                				<label class="bmd-label-floating" style={{fontFamily: " system-ui" ,fontWeight:600}}><strong>Upload Resume</strong></label><br/>
                				<input type="file"  name="file" required/>
                			</div>
                      </div>
                      </form>
  </div>
</div>
<div class="ui card" id="ss" style={{height:350}}>
  <div class="ui slide masked reveal image">
    <img src={web}class="visible content"/>
    <img src={web} class="hidden content"/>
  </div>
  <div class="content">
    <a class="header">Cells & Marketing</a>
    <div class="meta">
      <span class="date"></span>
    </div>
  </div>
  <div class="extra content">
  <form  action="resume" enctype="multipart/form-data" method="post" style={{border:"1" }}>
                <div class="col-md-6">
                			 <div class="form-group animate__animated animate__lightSpeedInLeft">
                				<label class="bmd-label-floating" style={{fontFamily: " system-ui" ,fontWeight:600}}><strong>Upload Resume</strong></label><br/>
                				<input type="file"  name="file" required/>
                			</div>
                      </div>
                      </form>
  </div>
  
</div>
<div class="ui card" id="aa" style={{height:350}}>
  <div class="ui slide masked reveal image">
    <img src={web} class="visible content"/>
    <img src={web} class="hidden content"/>
  </div>
  <div class="content">
    <a class="header">Humon Resource</a>
    <div class="meta">
      
    </div>
  </div>
  <div class="extra content">
  <form  action="resume" enctype="multipart/form-data" method="post" style={{border:"1" }}>
                <div class="col-md-6">
                			 <div class="form-group animate__animated animate__lightSpeedInLeft">
                				<label class="bmd-label-floating" style={{fontFamily: " system-ui" ,fontWeight:600}}><strong>Upload Resume</strong></label><br/>
                				<input type="file"  name="file" required/>
                			</div>
                      </div>
                      </form>
  </div>
  </div>
  <div class="col-md-12"  >
  <div className="row"><br/><br/><br/>
  <div class="ui card" style={{height:350}}>
  <div class="ui slide masked reveal image">
    <img src={web}class="visible content"/>
    <img src={web} class="hidden content"/>
  </div>
  <div class="content">
    <a class="header">Calling</a>
    <div class="meta">
      
    </div>
  </div>
  <div class="extra content">
  <form  action="resume" enctype="multipart/form-data" method="post" style={{border:"1" }}>
                <div class="col-md-6">
                			 <div class="form-group animate__animated animate__lightSpeedInLeft">
                				<label class="bmd-label-floating" style={{fontFamily: " system-ui" ,fontWeight:600}}><strong>Upload Resume</strong></label><br/>
                				<input type="file"  name="file" required/>
                			</div>
                      </div>
                      </form>
  </div>
</div>
<br/><br/>
<div class="ui card" id="zz" style={{height:350}}>
  <div class="ui slide masked reveal image">
    <img src={web}class="visible content"/>
    <img src={web} class="hidden content"/>
  </div>
  <div class="content">
    <a class="header">Team Fu &amp; Hess</a>
    <div class="meta">
      <span class="date">Created in Sep 2014</span>
    </div>
  </div>
  <div class="extra content">
  <form  action="resume" enctype="multipart/form-data" method="post" style={{border:"1" }}>
                <div class="col-md-6">
                			 <div class="form-group animate__animated animate__lightSpeedInLeft">
                				<label class="bmd-label-floating" style={{fontFamily: " system-ui" ,fontWeight:600}}><strong>Upload Resume</strong></label><br/>
                				<input type="file"  name="file" required/>
                			</div>
                      </div>
                      </form>
  </div>
  
</div>
<div class="ui card" id="xx" style={{height:350}}>
  <div class="ui slide masked reveal image">
    <img src={web}class="visible content"/>
    <img src={web} class="hidden content"/>
  </div>
  <div class="content" >
    <a class="header">Team Fu &amp; Hess</a>
    <div class="meta">
      <span class="date">Created in Sep 2014</span>
    </div>
  </div>
  <div class="extra content">
  <form  action="resume" enctype="multipart/form-data" method="post" style={{border:"1" }}>
                <div class="col-md-6">
                			 <div class="form-group animate__animated animate__lightSpeedInLeft">
                				<label class="bmd-label-floating" style={{fontFamily: " system-ui" ,fontWeight:600}}><strong>Upload Resume</strong></label><br/>
                				<input type="file"  name="file" required/>
                			</div>
                      </div>
                      </form>
  </div>
  </div>
</div>
</div>
    
			
                    
					

			</div>
		
			</div>
			</section>
	

			<Footer style={{margin:10}}/>
<FooterPage style={{margin:10}}/>
			</div>
			
	)
}

export default CareerPage
