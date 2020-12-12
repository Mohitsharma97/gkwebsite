import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import OutlinedCard from './OutlinedCard';
import {Image} from 'react-bootstrap';
export default class SingleLineGridList2 extends Component {
  render() {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
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
  itemClass="carousel-item-padding-40-px"
>
  <div><OutlinedCard adj="1"/></div>
  <div><OutlinedCard adj="2"/></div>
  <div><OutlinedCard adj="3"/></div>
  <div><OutlinedCard adj="4"/></div>
  <div><OutlinedCard adj="5"/></div>
  <div><OutlinedCard adj="6"/></div>
</Carousel>
      </div>
    );
  }
}