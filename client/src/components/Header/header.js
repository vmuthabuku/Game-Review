import React, { Component } from 'react'
import { Icon, Menu, Button} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

class Header extends Component {
  state = { activeItem: 'gamepad' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu icon='labeled' borderless>
        <Menu.Item></Menu.Item>
        <Menu.Item></Menu.Item>
        <Menu.Item name='gamepad'  
          as={NavLink}
          to="/" 
          active={activeItem === 'gamepad'} 
          onClick={this.handleItemClick}>
          <Icon name='gamepad' />
          Games
        </Menu.Item>

        <Menu.Item
          as={NavLink}
          to="/channels"
          name="newspaper outline"
          active={activeItem === "newspaper outline"}
          onClick={this.handleItemClick}
        >
          <Icon name="newspaper outline" />
          Channels
        </Menu.Item>

        <Menu.Item
          as={NavLink}
          to="/videos"
          name='video play'
          active={activeItem === 'video play'}
          onClick={this.handleItemClick}
        >
          <Icon name='video play' />
          Videos
        </Menu.Item>

        <Menu.Menu style={{paddingTop:"1em"}}position='right'>
          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>

          <Menu.Item>            
            <Button primary
            as={NavLink}
            to="/login">Log in</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default Header;
