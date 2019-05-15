import React, {Component} from 'react'
import {connect} from 'react-redux'
// import { getUserPosts } from '../../actions'
//import moment from 'moment-js'


class AllPost extends Component{

    // componentWillMount(){
    //     this.props.dispatch(getUserPosts(this.props.user.login.id))
    //  }
    render() {
        console.log(this.props.user.login.id)
        return(
            <div>
               zimesgika
            </div>
        )
    }
    
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(AllPost)