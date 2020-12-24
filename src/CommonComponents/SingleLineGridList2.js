import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import OutlinedCard from './OutlinedCard';
import {Image} from 'react-bootstrap';
import CardExample from './cardExample';
import CategoryModal from './categoryModal';
export default class SingleLineGridList2 extends Component {
  state = {
    modal: false
  };

   toggle = () => {
    console.log(this.state.modal)
    this.setState({
      modal: !this.state.modal
    });
  };
  render() {
    
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          slidesToSlide: 1 // optional, default to 1.
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
  swipeable={true}
  draggable={false}
  showDots={false}
  responsive={responsive}
  ssr={false} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={4000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={[]}//["tablet", "mobile"]
  deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-60-px"
>
  <div onClick={this.toggle}><CardExample image="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"/></div>
  <div onClick={this.toggle}><CardExample image="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"/></div>
  <div onClick={this.toggle}><CardExample image="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg"/></div>
  <div><CardExample image="https://mdbootstrap.com/img/Photos/Others/men.jpg"/></div>
  <div><CardExample image="https://mdbootstrap.com/img/Photos/Others/food.jpg"/></div>
  <div><CardExample image="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%28131%29.jpg"/></div>
</Carousel>
<CategoryModal toggle={this.toggle} modal={this.state.modal}/>
      </div>
    );
  }
}