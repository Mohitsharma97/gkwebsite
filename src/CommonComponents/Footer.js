import React from 'react'
import Container from 'react-bootstrap/Container';
import {Row,Col} from 'react-bootstrap';

export default function Footer() {
    return (
        <div style={{margin:30}} >
            <Container >
                <p class="serif " style={{fontFamily:"FreeMono, monospace"}}><h6><strong style={{fontFamily:"Helvetica, sans-serif " ,textDecoration:"underline"}}>Top City</strong> : Noida | Ghaziabad | Delhi | Gurgaon | Faridabad | Greater Noida</h6></p>
                <hr/>
                <p class="serif" style={{fontFamily:"FreeMono, monospace"}}> <h6><strong style={{fontFamily:"Helvetica, sans-serif",textDecoration:"underline"}}>Top Category</strong> : Interior Designers | False Ceiling | Architecture | Modular Kitchen | Construction Works | Plumbing & Sanitary Wares | Tiles - Floor & Walls | Home Decor | Paints | Electrical Fitting & Works | Wooden Works | Aluminium & Glass Works | Water Proofing | Furniture | Fabrication - M.S. | Window Blinds</h6></p>
                <hr/>
                <p class="serif" style={{fontFamily:"FreeMono, monospace"}}><h6><strong style={{fontFamily:"Helvetica, sans-serif",textDecoration:"underline"}}>City Based Popular Products</strong> : Modular Kitchen In Noida | Modular Kitchen In Ghaziabad | Modular Kitchen In Delhi | Modular Kitchen In Gurgaon | Modular Kitchen In Faridabad | Modular Kitchen In Greater Noida | Interior Designers In Noida | Interior Designers In Ghaziabad | Interior Designers In Delhi | Interior Designers In Gurgaon | Interior Designers In Faridabad | Interior Designers In Greater Noida</h6></p>
               

            </Container>
        </div>
    )
}