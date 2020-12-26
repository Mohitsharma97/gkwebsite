import Footer from '../CommonComponents/Footer';
import FooterPage from '../CommonComponents/FooterPage';
import React from 'react'
import './CareerPage.css'
import x from '../images/x.jpg'
import Content from './Content'
import web from '../images/x.jpg'
import A from '../images/A.jpg'
import B from '../images/B.jpg'
function CareerPage() {
	return (
		
		<div >
			
			<div class="  row " style={{paddingtop:180}} >
			<img src={web} style={{height:500,width:"100%" ,opacity:0.9}} alt="" class=""/>
			</div>
			<Content/>
		
			<section id="services"  style={{paddingBottom:90 ,paddingTop:50}} >
			 
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
			<div class="col-md-12"  style={{ marginLeft:10 ,paddingTop:60}} >
    
    
		
		
			<div class="row">
        <div class="ui link cards">
        <div class="card" style={{height:310}}>
          <div class="image">
            <img src={x}/>
          </div>
          <div class="content">
          <span>
          <a>
            <i class="user icon"></i>
            75 Friends
            </a>
          </span>
            <div class="meta">
              <a></a>
            </div>
            <div class="description">
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
        <div class="card" style={{height:310}}>
          <div class="image">
            <img src={A}/>
          </div>
          <div class="content">
          <span>
          <a>
            <i class="user icon"></i>
            35 Friends
            </a>
          </span>
            <div class="meta">
              <span class="date"></span>
            </div>
            <div class="description">
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
        <div class="card" style={{height:310}}>
        <div class="image">
          <img src={B}/>
        </div>
        <div class="content">
        <span>
        <a>
          <i class="user icon"></i>
          35 Friends
          </a>
        </span>
          <div class="meta">
            <span class="date"></span>
          </div>
          <div class="description">
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
      <div class="card" style={{height:310}}>
      <div class="image">
        <img src={A}/>
      </div>
      <div class="content">
      <span>
      <a>
        <i class="user icon"></i>
        35 Friends
        </a>
      </span>
        <div class="meta">
          <span class="date"></span>
        </div>
        <div class="description">
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
        
		
        <div class="row" style={{paddingTop:30}}>
        <div class="ui link cards">
        <div class="card" style={{height:310}}>
          <div class="image">
            <img src={x}/>
          </div>
          <div class="content">
          <span>
          <a>
            <i class="user icon"></i>
            75 Friends
            </a>
          </span>
            <div class="meta">
              <a></a>
            </div>
            <div class="description">
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
        <div class="card" style={{height:310}}>
          <div class="image">
            <img src={A}/>
          </div>
          <div class="content">
          <span>
          <a>
            <i class="user icon"></i>
            35 Friends
            </a>
          </span>
            <div class="meta">
              <span class="date"></span>
            </div>
            <div class="description">
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
        <div class="card" style={{height:310}}>
        <div class="image">
          <img src={B}/>
        </div>
        <div class="content">
        <span>
        <a>
          <i class="user icon"></i>
          35 Friends
          </a>
        </span>
          <div class="meta">
            <span class="date"></span>
          </div>
          <div class="description">
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
      <div class="card" style={{height:310}}>
      <div class="image">
        <img src={x}/>
      </div>
      <div class="content">
      <span>
      <a>
        <i class="user icon"></i>
        35 Friends
        </a>
      </span>
        <div class="meta">
          <span class="date"></span>
        </div>
        <div class="description">
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
