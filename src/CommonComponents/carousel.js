import React from 'react'

import Carousel from 'react-material-ui-carousel';
import Container from 'react-bootstrap/Container';
import {Row,Col} from 'react-bootstrap';
function Item(props)
{
    return (
        
            <img style={{height:400,minWidth:'100%'}} src={props.item.image}/>
        
    )
}
export default function carousel(props) {
    var items = [
        {
            image: "https://www.getkarigar.com/public/uploads/banner/gk_banner_1.png",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            image: "https://www.getkarigar.com/public/uploads/banner/gk_banner_2.png",
            description: "Hello World!"
        }
    ]

 
    return (
        <>
        <Container fluid>
         <Row>
             <Col></Col>
          <Col xs={8}>
         <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
         </Carousel>
         </Col>
         </Row>
         </Container>
        </>
    )
}

