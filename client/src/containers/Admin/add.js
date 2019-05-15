import React, { Component } from 'react'
import {Button ,Form, Grid, Header, TextArea, } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {addReview} from '../../actions'
//import {Link} from 'react-router-dom'


 class AddReview extends Component {

    state = {
        formdata:{
            name:"",
            reviewer:"",
            rating:"",
            price:"",
            review:""
        }
    }

    handleInput = (event, name)=> {
        const newFormdata = {
            ...this.state.formdata
        }
        newFormdata[name] = event.target.value

        this.setState({
            formdata:newFormdata
        })

    }

    submitForm = (e) => {
        e.preventDefault()
        this.props.dispatch(addReview({
            ...this.state.formdata,
            ownerId:this.props.user.login.id
        }))
        

    }

  render() {
   

    return (
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
            <Header  style={{paddingTop:"3em"}} as='h2' color='teal' textAlign='center'>
                Add Review       
            </Header>
            <Form onSubmit={this.submitForm} style={{paddingTop:"1em"}} size='large'>

                <Form.Input
                fluid icon='pencil alternate' 
                iconPosition='left'
                placeholder='Game Name'  
                type='name'
                value={this.state.formdata.name}
                onChange={(event)=>this.handleInput(event,'name')}

                />
                
                <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                placeholder='Review Name'
                type='reviewer'
                value={this.state.formdata.reviewer}
                onChange={(event)=>this.handleInput(event,'reviewer')}

                />
                 <Form.Input
                fluid
                icon='dollar'
                iconPosition='left'
                placeholder='Price'
                type='price'
                value={this.state.formdata.price}
                onChange={(event)=>this.handleInput(event,'price')}

                />
                 <Form.Field  
                
                style={{marginTop:"1em",marginBottom:"1em"}} 
                placeholder='Select your rating' 
                type='rating'
                value={this.state.formdata.rating}
                onChange={(event)=>this.handleInput(event,'rating')}
                control='select'>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                </Form.Field>
                

                <TextArea
                //fluid
                placeholder='Add Review'
                type='review'
                value={this.state.formdata.review}
                onChange={(event)=>this.handleInput(event,'review')}

                />



                <Button style={{marginTop:"1em"}} color='teal' fluid size='large'>
                       Submit Review
                </Button>

                </Form>
            </Grid.Column>
            </Grid>

    )
  }
 }
  const mapStateToProps = (state,) => {
      console.log(state)
      return {
          games: state.games
      }
  }


export default connect(mapStateToProps)(AddReview)
