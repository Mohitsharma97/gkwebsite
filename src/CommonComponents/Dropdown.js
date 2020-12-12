
import _ from 'lodash'
import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const stateOptions = [{
    key: "A",
    text: "A",
    value:"B",
  }]

const DropdownExampleSearchSelectionTwo = () => (
  <Dropdown placeholder='State' search selection options={stateOptions} />
)

export default DropdownExampleSearchSelectionTwo
