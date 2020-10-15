import React, { Component } from 'react';
import Newsfeed from './newsfeed';
import Login from './login';

class Middleware extends Component {
    state = { 
        authenticated: 0,
        owner_id: 0
    }

    handleValidCredential = data => {
        this.setState({
            authenticated: 1,
            owner_id: data['id']
        });
    }

    renderNewsfeed() {
        if( this.state.authenticated === 0 ){
            return <Login server_url={this.props.server_url} handleValidCredential = {this.handleValidCredential}/>
        }
        return <Newsfeed server_url={this.props.server_url} owner_id={this.state.owner_id} />
    }

    render() {
        return ( 
            <div>
                { this.renderNewsfeed() }
            </div>
        );
    }
}
 
export default Middleware;