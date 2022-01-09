import * as React from 'react';
import { Component } from 'react';
import Tweet from '../types/tweetFormat';
import { Card } from 'react-bootstrap';


type MyProps = {
    data : Tweet
};

type MyState = {};

class TweetBody extends Component <MyProps, MyState>{
    
    constructor(props: MyProps) {
        super(props);
        this.state = {};
    }
    
    render() { 
        let variant: string = 'Dark';
        return ( 
            <Card
                bg={variant.toLowerCase()}
                text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                style={{ width: '100%' }}
                className="mb-2"
            >
                <Card.Header>{this.props.data.tweet_author} @ {this.props.data.tweet_time}</Card.Header>
                <Card.Body>
                <Card.Text> {this.props.data.tweet_content} </Card.Text>
                </Card.Body>
            </Card>
            
        );
    }
}



export default TweetBody;