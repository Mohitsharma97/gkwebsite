import React from 'react'
import Navbar from '../CommonComponents/navbar';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Footer from '../CommonComponents/Footer';
import FooterPage from '../CommonComponents/FooterPage';
import FormPage from '../CommonComponents/FormPage';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import './Interior.css'
import '../CommonComponents/FormPage.css'
export default function InteriorPage() {
  let description =   "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.";
  let price = "100";
  let size="200";
  return (
      <>
      
      <Navbar/>
<div style={{marginTop:65, width:'100%'}}>
<Jumbotron style={{ backgroundImage:`url(${require("../images/room-3.jpeg")})`,height:450 }}>


     <div className="float-right form-design">
     <FormPage/>     
    </div>   

   
</Jumbotron>
</div>
<section className="single-room">
                <div className="single-room-images">
                <img key={"1"} src={require("../images/room-4.jpeg")} alt="image"></img>
                <img key={"1"} src={require("../images/room-2.jpeg")} alt="image"></img>
                <img key={"1"} src={require("../images/room-3.jpeg")} alt="image"></img>
              </div>
              <div className="single-room-info">
                   <article className="desc">
                       <h3>details</h3>
                       <p>{description}</p>
                   </article>
                   <article className="info">
                   <h3>info</h3>
                    <h6>Pice : ${price}</h6>
                    <h6>size : ${size} SQFT</h6>
                   </article>
                </div>
</section>   
<section className="room-extras">
                <h6>extras</h6>
                <ul className="extras">
                <li key="1">- "ABC"</li>
                <li key="1">- "ABC"</li>
                </ul>
            </section>
<Footer style={{margin:10}}/>
<FooterPage style={{margin:10}}/>
      </>
    )
}
