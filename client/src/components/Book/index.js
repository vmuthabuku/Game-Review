import React, { Component} from 'react';
import {connect} from 'react-redux'
import {getGameWithReviewer, clearGameWithReviewer} from '../../actions'
import { Label, Divider,Grid,Segment,Icon ,Container } from 'semantic-ui-react'
//import Books from '../../widgetsUI/book_items';


class GameView extends Component{
    
    componentWillMount(){
        this.props.dispatch(getGameWithReviewer(this.props.match.params.id))
    }

    componentWillUnmount(){
        this.props.dispatch(clearGameWithReviewer())
    }

    renderGame = (games) =>(
        games.game?
        <div>
            <Container text>
                <h1>{games.game.name}</h1>
                <h5>{games.game.reviewer}</h5>
                <span> <small>Reviewed by: {games.reviewer.name} {games.reviewer.lastname}
                </small> <Icon name="twitter"/> <Icon name="facebook"/> <Icon name="instagram"/></span><hr/><br/>
                <div>{games.game.review}</div><br/>
                
                <Segment >
                    <Grid columns={2} relaxed='very' stackable>
                    <Grid.Column>                    
                        <Label tag style={{width:"100%"}} as='a'><span  style={{marginLeft:"7em"}}>price: Ksh  {games.game.price}</span> </Label>
                    </Grid.Column>
                    <Grid.Column verticalAlign='middle'>
                        <Label style={{width:"100%"}} as='a'>
                        <span style={{marginLeft:"9em"}}>
                        Rating: {games.game.rating}
                        </span>
                        </Label>
                    </Grid.Column>
                    </Grid>
                    <Divider vertical/>
                </Segment>
                
            </Container>
        </div>:null
    )
    
    render(){
        let games = this.props.games
        console.log(games)
        return (
            <div>
               {this.renderGame(games)}
            </div>
        );
    }
    
}

const mapStateToProps = (state) => {
    return {
        games: state.games
    }
}


export default connect(mapStateToProps)(GameView);
