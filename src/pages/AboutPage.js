import React,{useEffect} from 'react'
import './AboutPage.css'
import FooterPage from '../CommonComponents/FooterPage';
import Footer from '../CommonComponents/Footer';
import { Container } from 'react-bootstrap'
import Content from './Content';


function AboutPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
            
             <Content/>
             
<section id="services" style={{paddingBottom:200, backgroundImage:`url(https://blog.ipleaders.in/wp-content/uploads/2018/03/BV-Acharya.jpg)` }}  >
             <div class="container">
                 <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center text" style={{marginTop:200  }} >
        <h1 class="ssize animate__animated animate__zoomIn " style={{fontFamily: "Lucida Bright",color:"white"}}>Welcome to Our Company</h1>
        <h4 style={{ textAlign:"justify" ,color:"white" ,paddingTop:30}} className="animate__animated animate__zoomIn " ><strong style={{fontFamily: "Lucida Bright"}}>Getcon Media Private Ltd,</strong> is the parent organization of GetKarigar. It was started with a vision by the founders in January 2019 to bring various industries on one single platform. It is a unique concept because it helped us to serve the consumers and vendors at the same time.</h4>
        </div>
</div>

    

        </div>
        </section>
        <div class="container col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center text">
     <h1 class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center text" style={{paddingTop:30,fontFamily: "serif"}}>About GetKarigar</h1>
     <h4 style={{fontFamily: "serif" ,paddingTop:20,paddingBottom:70}} className="animate__animated animate__zoomIn">A consumer can be assured of 100% quality and on time service, in just one click. Vendors are provided with plans as per the needs of their business, helping it to grow exponentially.  You have easy pay options, trust worthy engagements.  In order to assure your continuous improvement and growth, a star rating system is put at place, according to the client review.  </h4>
        </div>
        

<div className="container col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center text animate__animated animate__zoomIn"   >
     

     

      <h1 >Business To Consumer</h1>
     
      <img style={{height:300}}  src={'https://blog.ipleaders.in/wp-content/uploads/2018/03/BV-Acharya.jpg'} alt="About Us" className="simg"/>

      </div><br/><br/>
      <div className=" col-lg-6 col-md-6 col-sm-6 col-xs-6" style={{paddingTop:40 ,paddingBottom:50}}>
      <h1 class="col-md-12 col-sm-12 col-xs-12 text-center text">OUR VISION</h1>
      <p style={{textAlign:"center",fontFamily: "Lucida Bright"}} className="animate__animated animate__zoomIn">With all the hard work and collaborations, we as a company hold a vision of providing world class facilities to the consumers, we make sure that the vision of the company is held by each of our employees and we work towards achieving our targets.</p>
      
     <br/><br/>
     <h1 className=" col-md-12 col-sm-12 col-xs-12 text-center text">OUR MISSION</h1>
      <p style={{textAlign:"center",fontFamily: "Lucida Bright"}} className="animate__animated animate__zoomIn">We aim to make sure that the consumers do not suffer and the karigar get their fair chance of making profits. We pursue a mission that will help everyone grow and be satisfied. We work towards 100% customer satisfaction and punctual delivery.</p>
     </div>
        <Footer style={{margin:10}}/>
        <hr/>
              <FooterPage style={{margin:10}}/>
        </div>
        
       
    )
}

export default AboutPage;
