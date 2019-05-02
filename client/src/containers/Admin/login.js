import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../../actions'
import { Button, Form, Grid, Header,Segment,  Message,} from 'semantic-ui-react'

class Login extends Component {

    state = {
        email:"",
        password:"",
        error:"",
        success:false
    }
    
    handleInputEmail =(event)=>{
        this.setState({email:event.target.value})
    }

    handleInputPassword = (event) => {
        this.setState({password:event.target.value})
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.user.login.isAuth){
            this.props.history.push('/user')
        }
    }

    submitForm = (e) => {
        e.preventDefault()
        this.props.dispatch(loginUser(this.state))
        console.log(this.state)

    }

    render() {
        let user = this.props.user
        return (
            <div className='login-form'>
  
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header  style={{paddingTop:"3em"}} as='h2' color='teal' textAlign='center'>
                        Login Here        
                    </Header>
                    <Form onSubmit={this.submitForm} style={{paddingTop:"1em"}} size='large'>
                    
                        <Form.Input
                        fluid icon='user' 
                        iconPosition='left'
                        placeholder='E-mail address'  
                        type='email'
                        value={this.state.email}
                        onChange={this.handleInputEmail}

                        />
                        
                        <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                        value={this.state.password}
                        onChange={this.handleInputPassword}

                        />

                        <Button color='teal' fluid size='large'>
                        Login
                        </Button>
                    
                    </Form>
                    <Message>
                    New to us?
                    </Message>
                    {
                        user.login ? 
                        <Segment inverted color='red' >
                            {user.login.message}
                        </Segment>
                        :null
                    }
                </Grid.Column>
                </Grid>
            </div>

        )
    }
}


const mapStateToProps = (state) => {
    console.log(state)
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Login);
