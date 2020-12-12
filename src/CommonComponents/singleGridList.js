import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import OutlinedCard from './OutlinedCard';
import {Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';
export default class SingleLineGridList extends Component {
  render() {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 8,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    return (
      <div>
<Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={false} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={3000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={[]}//["tablet", "mobile"]
  deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-2-px"
>


  <Link to={{pathname:'/paints',data:"data"}}><div><Image style={{height:150,width:150}} src="https://www.getkarigar.com/img/karigar.png" roundedCircle /></div></Link>
  <Link to={{pathname:'/cat/Interior',data:"data"}}><div><Image style={{height:150,width:150}} src="https://www.getkarigar.com/img/karigar.png" roundedCircle /></div></Link>
  <div><Image style={{height:150,width:150}} src="https://www.getkarigar.com/img/karigar.png" roundedCircle /></div>
  <div><Image style={{height:150,width:150}} src="https://www.getkarigar.com/img/karigar.png" roundedCircle /></div>
  <div><Image style={{height:150,width:150}} src="https://www.getkarigar.com/img/karigar.png" roundedCircle /></div>
  <div><Image style={{height:150,width:150}} src="https://www.getkarigar.com/img/karigar.png" roundedCircle /></div>
  

</Carousel>
      </div>
    );
  }
}