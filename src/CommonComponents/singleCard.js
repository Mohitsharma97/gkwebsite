import React from 'react'
import { Image, Item } from 'semantic-ui-react'
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
const ItemExampleItems = (props) => (
  <Item.Group>
    <Item>
      <Item.Image size='medium' src={'https://www.getkarigar.com/public/'+props.data.img_url} />

      <Item.Content>
        <Item.Header as='a'>{props.data.bname}</Item.Header>
        <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Rating</Typography>
        <Rating name="read-only" value={ parseInt(props.data.rating)} readOnly />
        </Box>
        <Item.Meta>Description</Item.Meta>
           
        <Item.Description>
          
        </Item.Description>
        <Item.Extra>Additional Details</Item.Extra>
        <Item.Extra>{props.data.bname}</Item.Extra>
      </Item.Content>
    </Item>

    
  </Item.Group>
)

export default ItemExampleItems