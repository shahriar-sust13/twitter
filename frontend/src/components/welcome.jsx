import React, { Component } from 'react';

class Welcome extends Component {
    state = {  }
    render() {
        return ( 
            <div className="container">
                <div className="col-md-12">
                <a href="/newsfeed">Check Your Newsfeed</a><br/>
                <a href="/users">Users</a>
                </div>
            </div>
        )
    }
}
 
export default Welcome;