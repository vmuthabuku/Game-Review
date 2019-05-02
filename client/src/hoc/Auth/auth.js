import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Loader, Dimmer } from 'semantic-ui-react'
import { Oauth } from '../../actions'

export default function(ComposedClass){
    class Auth extends Component {

        state = {
            loading:false
        }

        componentWillMount(){
            this.props.dispatch(Oauth())
        }
        componentWillReceiveProps(nextProps){
            console.log(nextProps)
        }

        render() {
            if(this.state.loading){  
                return   <Dimmer active><Loader size='massive'></Loader></Dimmer>              
         
               
            }
            return (
           <ComposedClass {...this.props}/>
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

    

