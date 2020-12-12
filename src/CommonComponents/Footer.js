import React from 'react'
import Container from 'react-bootstrap/Container';
import {Row,Col} from 'react-bootstrap';
export default function Footer() {
    return (
        <div style={{margin:10}}>
            <Container >
                
                <Row>
                <h6>Top Cities:</h6> Noida | Ghaziabad | Delhi | Gurgaon | Faridabad | Greater Noida
                </Row>
                <Row>
                <h6>Top Categories:</h6>  Interior Designers | False Ceiling | Architecture | Modular Kitchen | Construction Works | Plumbing & Sanitary Wares | Tiles - Floor & Walls | Home Decor | Paints | Electrical Fitting & Works | Wooden Works | Aluminium & Glass Works | Water Proofing | Furniture | Fabrication - M.S. | Window Blinds
                </Row>
                <Row>
                <h6>City Based Popular Products:</h6>
                </Row>
                
                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>

            </Container>
        </div>
    )
}
