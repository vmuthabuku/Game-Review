import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Loader, Dimmer } from 'semantic-ui-react'
import { Oauth } from '../../actions'

export default function(ComposedClass, reload){
    class Auth extends Component {

        state = {
            loading:false
        }

        componentWillMount(){
            this.props.dispatch(Oauth())
        }
        componentWillReceiveProps(nextProps){
            this.setState({loading:false})

            if(!nextProps.user.login.isAuth){
                if(reload){
                    this.props.history.push('/login')
                }
               
            }
            else{
            if(reload===false){
                this.props.history.push("/user")
            }
                
            }

        }

        render() {
            if(this.state.loading){  
                return   <Dimmer active><Loader size='massive'></Loader></Dimmer>              
         
               
            }
            return (
           <ComposedClass {...this.props} user={this.props.user}/>
            )
        }
        }
        const mapStateToProps = (state) => {
            return {
                user: state.user
            }
        }
        return connect(mapStateToProps)(Auth)

}

    

