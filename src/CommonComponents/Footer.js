import React from 'react'
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';

export default function Footer() {
    return (
        <div style={{margin:30}} >
            <Container >
                <p class="serif " style={{fontFamily:"FreeMono, monospace"}}><h6><strong style={{fontFamily:"Helvetica, sans-serif " ,textDecoration:"underline"}}>Top City</strong> : Noida | Ghaziabad | Delhi | Gurgaon | Faridabad | Greater Noida</h6></p>
                <hr/>
                <p class="serif" style={{fontFamily:"FreeMono, monospace"}}> <h6><strong style={{fontFamily:"Helvetica, sans-serif",textDecoration:"underline"}}>Top Category</strong> :<Link to={{pathname:'/Interior-Designers',data:"data"}}>Interior Designers</Link>  | <Link to={{pathname:'/False-Ceiling',data:"data"}}>False Ceiling</Link> | <Link to={{pathname:'/Architecture',data:"data"}}>Architecture</Link> | <Link to={{pathname:'/Modular-Kitchen',data:"data"}}>Modular Kitchen</Link> | <Link to={{pathname:'/Construction-Works',data:"data"}}>Construction Works</Link> |<Link to={{pathname:'/Plumbing-&-Sanitary-Wares',data:"data"}}> Plumbing & Sanitary Wares</Link> | <Link to={{pathname:'/Tiles-Floor-&-Walls',data:"data"}}>Tiles - Floor & Walls</Link> | <Link to={{pathname:'/Home-Decor',data:"data"}}>Home Decor</Link> | <Link to={{pathname:'/Paints',data:"data"}}>Paints</Link> | <Link to={{pathname:'/Electrical-Fitting-&-Works',data:"data"}}>Electrical Fitting & Works</Link> | <Link to={{pathname:'/Wooden-Works',data:"data"}}>Wooden Works</Link> | <Link to={{pathname:'/Aluminium-&-Glass-Works',data:"data"}}>Aluminium & Glass Works</Link> | <Link to={{pathname:'/Water-Proofing',data:"data"}}>Water Proofing</Link> | <Link to={{pathname:'/Furniture',data:"data"}}>Furniture</Link> | <Link to={{pathname:'/Fabrication-M.S.',data:"data"}}>Fabrication - M.S.</Link> | <Link to={{pathname:'/WINDOW-BLINDS',data:"data"}}>Window Blinds</Link></h6></p>
                <hr/>
                <p class="serif" style={{fontFamily:"FreeMono, monospace"}}><h6><strong style={{fontFamily:"Helvetica, sans-serif",textDecoration:"underline"}}>City Based Popular Products</strong> : Modular Kitchen In Noida | Modular Kitchen In Ghaziabad | Modular Kitchen In Delhi | Modular Kitchen In Gurgaon | Modular Kitchen In Faridabad | Modular Kitchen In Greater Noida | Interior Designers In Noida | Interior Designers In Ghaziabad | Interior Designers In Delhi | Interior Designers In Gurgaon | Interior Designers In Faridabad | Interior Designers In Greater Noida</h6></p>
               

            </Container>
        </div>
    )
}