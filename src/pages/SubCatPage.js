import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import Navbar from '../CommonComponents/navbar';
import { MDBContainer,} from "mdbreact";
import Jumbotron from 'react-bootstrap/Jumbotron';
import FormPage from '../CommonComponents/FormPage';

import SubCatGridList from '../CommonComponents/SubCatGridList';
import FooterPage from '../CommonComponents/FooterPage';
import Footer from '../CommonComponents/Footer';
function SubCatPage(props) {
    return (
        <>
            <Navbar/>
            <div style={{marginTop:65}}>
<Jumbotron fluid  style={{ backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)`,height:450 }}>
<div className="float-right" position-sticky style={{width:'24%', marginRight:20}}>
     <FormPage/>     
    </div>   
</Jumbotron>
<MDBContainer >
<SubCatGridList catName={props.match.params.category}/>
</MDBContainer>
</div>
<Footer style={{margin:10}}/>
<FooterPage style={{margin:10}}/>
        </>
    )
}

export default SubCatPage
