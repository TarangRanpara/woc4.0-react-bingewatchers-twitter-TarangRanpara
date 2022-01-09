import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import '../App.css';
import Tweet from '../types/tweetFormat';
import TweetBody from '../components/tweetBody';


type MyProps = {};
type MyState = {};

class Home extends Component <MyProps, MyState>{
    
    constructor(props: MyProps) {
        super(props);
        this.state = {};
    }
    
    fakeTweets: Tweet[] = [
        {
            'tweet_id': 1, 
            'tweet_author': 'tjr', 
            'tweet_time': '1am', 
            'tweet_content': 'Friends is awesome!'
        }, 
        {
            'tweet_id': 2, 
            'tweet_author': 'kjr', 
            'tweet_time': '2am', 
            'tweet_content': 'HIMYM is awesome!'
        }, 
        {
            'tweet_id': 3, 
            'tweet_author': 'sds', 
            'tweet_time': '3am', 
            'tweet_content': 'TBBT is awesome!'
        }, 
        {
            'tweet_id': 4, 
            'tweet_author': 'kds', 
            'tweet_time': '4am', 
            'tweet_content': 'Young Sheldon is awesome!'
        }, 
        {
            'tweet_id': 5, 
            'tweet_author': 'jmr', 
            'tweet_time': '5am', 
            'tweet_content': 'Little things is awesome!'
        }, 
        {
            'tweet_id': 5, 
            'tweet_author': 'rjr', 
            'tweet_time': '6am', 
            'tweet_content': 'Pitchers is awesome!'
        }, 

    ];

    render() {
        const tweets = this.fakeTweets.map((tweet) => <TweetBody data={tweet} />); 
        return ( 
            <div className = "page"> {tweets} </div>
        );
    }
}
 
export default Home;