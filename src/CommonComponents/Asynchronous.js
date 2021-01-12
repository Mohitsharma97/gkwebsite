import React,{useState} from 'react'
import './Asynchronous.css'

function Asynchronous(props) {


  return (
    <div>
    <select onChange={props.selctCity} class="ui dropdown selectcity"  style={{height:43}} >
    <option value="0">Select city</option>
    <br/>
   { props.citylist.map(city=>{
      return(
        <>
        <option value={city.state_code}>{city.name}</option>
        <br/>
        </>
      )
    })
    }
   
  </select>
    </div>
  )
}

export default Asynchronous
