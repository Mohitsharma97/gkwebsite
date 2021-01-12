import React,{ useState, useEffect } from 'react'
import Navbar from '../CommonComponents/navbar';
import Jumbotron from 'react-bootstrap/Jumbotron';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import { MDBContainer, MDBBtn } from "mdbreact";
import FormPage from '../CommonComponents/FormPage';
import './Category.css'
import ItemExampleItems from '../CommonComponents/singleCard'
import FooterPage from '../CommonComponents/FooterPage';
import Footer from '../CommonComponents/Footer';
import MessageExampleList from '../CommonComponents/CategoryDetails';
import ConsumerDetailsModal from '../CommonComponents/ConsumerDetailsModal';
import OtpModal from '../CommonComponents/OtpModal';
const postsPerPage = 10;
let arrayForHoldingPosts = [];
export default function CategoryPage(props) {

    let selectedCat = props.match.params.category;
    let selectedSubCat=props.match.params.subCategory;
    let selectedCity=  props.match.params.city;
    const [vendorList,setVendorList]=useState([]);
    const [postsToShow, setPostsToShow] = useState([]);
    const [next, setNext] = useState(10);
    const [modal,setModal] = useState(false);
    const [otpModal,setOtpModal] = useState(false);
    let switchModal=()=>{
      setModal(!modal);
      setOtpModal(!otpModal);
    }
    let otpModalToggle =()=>{
     setOtpModal(!otpModal);
    }
    let toggle = ()=>{
      setModal(!modal);
    }
    

    useEffect(
        ()=>{
//             navigator.geolocation.getCurrentPosition(function(position) {
//                 console.log("Latitude is :", position.coords.latitude);
//                 console.log("Longitude is :", position.coords.longitude);
//          fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + position.coords.latitude + ',' + position.coords.longitude + '&key=' + 'AIzaSyBn-2hw0LMNCf1OG4JQTNLHLvPSKgPx9ts')
//         .then((response) => response.json())
//         .then((responseJson) => {
//             console.log('ADDRESS GEOCODE is BACK!! => ' + JSON.stringify(responseJson));
// })
//               });
             
                
                 fetch(`http://localhost:3001/${selectedCat}/${selectedSubCat}/${selectedCity}`)
                 .then(response => response.json())
                 .then(data =>{
                    setVendorList(data.vendorsList);
                    loopWithSlice(0, postsPerPage,data.vendorsList);
                   
                 });
                 arrayForHoldingPosts=[];
                 
        },[selectedSubCat]
        
    )
  
   
    const loopWithSlice = (start, end,data) => {
  
        const slicedPosts = data.slice(start, end);
        arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
        setPostsToShow(arrayForHoldingPosts);
         
      };
    
   
     
      const handleShowMorePosts = () => {
       
        loopWithSlice(next, next + postsPerPage,vendorList);
        setNext(next + postsPerPage);
      };
 
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
<MessageExampleList/>
</MDBContainer>
<MDBContainer fluid>
 <div style={{marginInlineStart:20,marginTop:20}}>   

{postsToShow.map((data,index)=>{
    return( <div onClick={toggle} key={index} style={{marginTop:15}}><ItemExampleItems data={data}/></div> );
})}
</div>

</MDBContainer>

</div>
<div className="loadmoreBtn">

<MDBBtn outline color="danger" onClick={handleShowMorePosts}>Load more</MDBBtn>
</div>
<Footer style={{margin:10}}/>
<FooterPage style={{margin:10}}/>
<ConsumerDetailsModal modal={modal} toggle={toggle} switchModal={switchModal}/>
<OtpModal modal={otpModal} toggle={otpModalToggle} />
</>
    )
}
