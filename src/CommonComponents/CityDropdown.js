import React from 'react'

function CityDropdown(props) {
    return (
        <div>
        <select onChange={props.selectCity} className="browser-default custom-select" >
          <option>Select City</option>
        { props.cityList.map(city=>{
           return <option key={city.state_code} value={city.name}>{city.name}</option>
        })
        }
        </select>
        </div>
    )
}

export default CityDropdown
