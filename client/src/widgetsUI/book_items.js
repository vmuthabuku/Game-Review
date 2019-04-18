import React from 'react'
import { Container,Item, Label } from 'semantic-ui-react'
import {Link} from "react-router-dom"

const Books = (item) => (
    <Container text>
    <Item.Group divided>
        <Item>
        <Item.Content>
            <Link to={`/game/${item._id}`}><Item.Header>{item.name}</Item.Header></Link>
            <Item.Meta>
            <small><span className='cinema'>developers: {item.reviewer}</span></small>
            </Item.Meta>
            <Item.Extra>
            <Label>Price: {item.price}</Label>
            <Label>Rating: {item.rating}</Label>
            </Item.Extra>
        </Item.Content>
        </Item>
    </Item.Group><br/>
    </Container>
 
)

export default Books