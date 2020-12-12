import React,{ useState, useEffect } from 'react'
import Navbar from '../CommonComponents/navbar';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import FormPage from '../CommonComponents/FormPage';
import './Category.css'
import ItemExampleItems from '../CommonComponents/singleCard'
import MessageExampleList from '../CommonComponents/CategoryDetails'
const postsPerPage = 3;
let arrayForHoldingPosts = [];
export default function CategoryPage(props) {
   
    const [postsToShow, setPostsToShow] = useState([]);
    const [next, setNext] = useState(3);
    let posts = [{a:"1",b:"2"},{a:"2",b:"3"},{a:"2",b:"3"},{a:"2",b:"3"},{a:"2",b:"3"},{a:"2",b:"3"}];
    const loopWithSlice = (start, end) => {
      const slicedPosts = posts.slice(start, end);
      arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
      setPostsToShow(arrayForHoldingPosts);
    };
  
  
  
    const handleShowMorePosts = () => {
      loopWithSlice(next, next + postsPerPage);
      setNext(next + postsPerPage);
    };



    useEffect(
        ()=>{
            navigator.geolocation.getCurrentPosition(function(position) {
                console.log("Latitude is :", position.coords.latitude);
                console.log("Longitude is :", position.coords.longitude);
         fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + position.coords.latitude + ',' + position.coords.longitude + '&key=' + 'AIzaSyBn-2hw0LMNCf1OG4JQTNLHLvPSKgPx9ts')
        .then((response) => response.json())
        .then((responseJson) => {
            console.log('ADDRESS GEOCODE is BACK!! => ' + JSON.stringify(responseJson));
})
              });
              loopWithSlice(0, postsPerPage);
        },[]
        
    )
    const numbers = [{a:"1",b:"2"},{a:"2",b:"3"},{a:"2",b:"3"},{a:"2",b:"3"},{a:"2",b:"3"},{a:"2",b:"3"}];
const listItems = numbers.map((number,index) =>
    <li>{number.a}{index}</li>
);
    return (
        // <div>
        //     {props.match.params.category}
        //     {props.location.data}
        // </div>
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
    return( <ItemExampleItems data={data}/> );
})}
</div>

<button onClick={handleShowMorePosts}>Load more</button>
</MDBContainer>

</div>
        </>
    )
}
