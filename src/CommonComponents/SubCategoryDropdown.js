import React from 'react'

export default function SubCategoryDropdown(props) {
    return (
        <div>
        <select onChange={props.selectSubCat} className="browser-default custom-select">
          <option>Select Sub-Category</option>
        { props.subCategory.map(subCat=>{
           return <option key={subCat.id} value={subCat.subcat_url}>{subCat.subcat_name}</option>
        })
        }
        </select>
        
        </div>
    )
}
