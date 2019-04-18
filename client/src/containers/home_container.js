import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getGames } from '../actions'
import Books from "../widgetsUI/book_items"
import { Button, Container } from 'semantic-ui-react'

class HomeContainer extends Component {

componentWillMount(){
  this.props.dispatch(getGames(3,0,"desc"))

}

  renderItems = (games) =>(
    games.list ? 
    games.list.map(item => (
      <Books {...item} key={item._id}/>
    )):null
  )
  loadmore = () =>{
    let count = this.props.games.list.length
    console.log(count)
    this.props.dispatch(getGames(3,count,"desc", this.props.games.list))
  }

  render() {
    return (
      <div>
       {this.renderItems(this.props.games)}
       <div>
       <Container text><Button fluid onClick={this.loadmore}>
       load more
      </Button></Container>
       </div>
      </div>
      
      
    )
  }
}
const mapStateToProps = (state) => {
  return {
    games: state.games
  }
}

export default connect(mapStateToProps)(HomeContainer)
