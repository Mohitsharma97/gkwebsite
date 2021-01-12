import React, { Component } from "react";
import "react-multi-carousel/lib/styles.css";
import {Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './trendingCategory.css';
import {MDB} from "mdbreact";
export default class SingleLineGridList extends Component {
  render() {
    
    return (

      <div style={{padding:25}}>
<div class="row">
<div class="column">
<div><Image style={{height:150,width:150}} src="https://www.getkarigar.com/img/karigar.png" roundedCircle /></div>
</div>
<div class="column">
<Link to={{pathname:'/cat/Interior',data:"data"}}><div><Image style={{height:150,width:150}} src="https://www.getkarigar.com/img/karigar.png" roundedCircle /></div></Link>
</div>
<div class="column">
<div><Image style={{height:150,width:150}} src="https://www.getkarigar.com/img/karigar.png" roundedCircle /></div>
</div>
<div class="column">
<div><Image style={{height:150,width:150}} src="https://www.getkarigar.com/img/karigar.png" roundedCircle /></div>
</div>
<div class="column">
<div><Image style={{height:150,width:150}} src="https://www.getkarigar.com/img/karigar.png" roundedCircle /></div>
</div>
<div class="column">
<div><Image style={{height:150,width:150}} src="https://www.getkarigar.com/img/karigar.png" roundedCircle /></div>
</div>
<div class="column">
<div><Image style={{height:150,width:150}} src="https://www.getkarigar.com/img/karigar.png" roundedCircle /></div>
</div>
<div class="column">

                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                  alt=""
                  className="rounded-circle img-fluid"
                  style={{height:150,width:150}}
                />
              <h4 className="font-weight-bold mt-2 ml-2">Anna Deynah</h4>
</div>
<div class="column">

                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                  alt=""
                  className="rounded-circle img-fluid mx-auto"
                  style={{height:150,width:150}}
                />
              <h4 className="font-weight-bold mt-2 ml-2">Anna Deynah</h4>
</div>
</div>
 
 

 
 
  
  


      </div>
    );
  }
}