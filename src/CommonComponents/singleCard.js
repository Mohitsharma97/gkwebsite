import React from 'react'
import { Image, Item } from 'semantic-ui-react'

const ItemExampleItems = (props) => (
  <Item.Group>
    <Item>
      <Item.Image size='medium' src={require("../images/room-4.jpeg")} />

      <Item.Content>
        <Item.Header as='a'>Header</Item.Header>
        <Item.Meta>Description</Item.Meta>

        <Item.Description>
          
        </Item.Description>
        <Item.Extra>Additional Details</Item.Extra>
        <Item.Extra>{props.data.a}</Item.Extra>
      </Item.Content>
    </Item>

    
  </Item.Group>
)

export default ItemExampleItems