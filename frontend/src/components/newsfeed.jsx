import React, { Component } from 'react';
import Tweets from './tweets';

class Newsfeed extends Component {
    state = {  }

    constructor(){
        super();
    }

    render() { 
        return <Tweets owner_id = {this.props.owner_id} server_url = {this.props.server_url} />;
    }
}
 
export default Newsfeed;