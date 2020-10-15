import React, { Component } from 'react';
import axios from "axios";
import PostTweet from './posttweet';

class Tweets extends Component {
    state = { 
        found: 0
    }


    showTweets(){
        if( this.state.found === 1 ){
            return;
        }
        const newsfeedurl = this.props.server_url + 'newsfeed/' + this.props.owner_id;

        console.log(newsfeedurl);

        axios.get(newsfeedurl)
        .then(response=>{
            console.log(response);
            const tweets = response['data'];
            console.log(tweets);
            
            this.setState({
                found: 1,
                items: tweets
            });
            
            console.log('done');
        })
        .catch(err => console.log(err));
    }

    render() { 
        /*
        this.showTweets();
        console.log('another done');
        console.log(this.state.items);
        const tweets = JSON.parse(this.state.items); 
        const listItems = tweets.map((tweet) =>
            <li key = {tweet['id']}>{tweet['text']}</li>
        );
        console.log(tweets);
        */
        return (<div>
            <PostTweet server_url = {this.props.server_url} owner_id={this.props.owner_id}/>
        </div>);
    }
}
 
export default Tweets;