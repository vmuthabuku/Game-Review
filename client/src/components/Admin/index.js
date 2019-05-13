import React from 'react'
import { Card, Icon, Container } from 'semantic-ui-react'


const User = (props) => {
   let user = props.user.login
    return(
    <Container>
       
        <Card style={{height:"0px"}}>
            <Card.Content header={user.name} />
            <Card.Content header={user.lastname} />
            <Card.Content extra>
            <Icon name='mail'/>
            {user.email}
            </Card.Content>
        </Card>

    </Container>
    )
}

export default User;