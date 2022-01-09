import React, { Component } from 'react';
import { Container, Row, Col, Button, Alert, Card } from 'react-bootstrap';
import '../App.css';
import TMDB_Trending_Movies from '../utils/TMDB_Trending_Movies';
import TMDB_Trending_TV from '../utils/TMDB_Trending_TV';
import TMDB_Trending_Person from '../utils/TMDB_Trending_Person';
import 'bootstrap/dist/css/bootstrap.min.css';


type MyProps = {};
type MyState = {
    type: string,
    period: string,  
    response: object[]
};

// type: movie, tv, person 
// period: day, week 

class Trending extends Component <MyProps, MyState>{
    constructor(props: MyProps) {
        super(props);
        this.state = {
            type: 'movie',
            period: 'day',  
            response: []
        };
    }

    componentDidMount(){
        this.fetchMovies(this.state.period);
    }

    promiseAndSetState(obj: any, type:string, period: string){
        obj.get().then((response: any) => {
            this.setState({type: 'movie', response: response.results as object[], period: this.state.period}); 
        }).catch((error: any) => {
            console.log(error);
        })
    }

    fetchMovies(period: string){
        const trending = new TMDB_Trending_Movies('movie', period);
        
        trending.get().then((response) => {
            this.setState({type: 'movie', response: response.results as object[], period: period}); 
        }).catch((error) => {
            console.log(error);
        })
        
    }

    fetchTV(period: string){
        const trending = new TMDB_Trending_TV('tv', period);
        trending.get().then((response) => {
            this.setState({type: 'tv', response: response.results as object[], period: period}); 
        }).catch((error) => {
            console.log(error);
        })
    }

    fetchPerson(period: string){
        const trending = new TMDB_Trending_Person('person', period);
        trending.get().then((response) => {
            this.setState({type: 'person', response: response.results as object[], period: period}); 
        }).catch((error) => {
            console.log(error);
        })
    }
    
    render() {
        const resp_data = this.state.response; 
       
        return ( 
            <div className = "page"> 

            <Row>
                <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" className="btn-check" name="btnradio" id="btnradio1"  
                    onClick={() => {
                        this.fetchMovies(this.state.period);
                    }} />
                    <label className="btn btn-outline-danger" htmlFor="btnradio1">Movies</label>

                    <input type="radio" className="btn-check" name="btnradio" id="btnradio2"  
                    onClick = {() => {
                        this.fetchTV(this.state.period);
                    }}/>
                    <label className="btn btn-outline-warning" htmlFor="btnradio2">TV</label>

                    <input type="radio" className="btn-check" name="btnradio" id="btnradio3" 
                    onClick = {() => {
                        this.fetchPerson(this.state.period);
                    }}/>
                    <label className="btn btn-outline-primary" htmlFor="btnradio3">People</label>
                </div>
            </Row>

            <Row>
                <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" className="btn-check" name="btnradio" id="btnradio11"  
                    onClick={() => {
                        let state = 'day';
                        if(this.state.type == 'movie')
                            this.fetchMovies(state);
                        else if(this.state.type == 'tv')
                            this.fetchTV(state);
                        else
                            this.fetchPerson(state);
                    }} />
                    <label className="btn btn-outline-danger" htmlFor="btnradio11">Daily</label>

                    <input type="radio" className="btn-check" name="btnradio" id="btnradio12"  
                    onClick = {() => {
                        let state = 'week';
                        if(this.state.type == 'movie')
                            this.fetchMovies(state);
                        else if(this.state.type == 'tv')
                            this.fetchTV(state);
                        else
                            this.fetchPerson(state);
                    }}/>
                    <label className="btn btn-outline-warning" htmlFor="btnradio12">Weekly</label>
                    </div>
            </Row>
            
            <br/>
            
            <Row> 
            <Alert key={99} variant='primary'>
                { this.state.type == 'movie' && 'Trending Movies' }
                { this.state.type == 'tv' && 'Trending TV shows'}
                { this.state.type == 'person' && 'Trending Actors'}  
            </Alert>
            </Row>
                { this.state.type == 'movie' && resp_data && resp_data.length && resp_data.map((obj: any, idx) => {
                        return <><Card
                            bg='dark'
                            border="primary"
                            key={idx}
                            text='white'
                            style={{ width: '100%' }}
                            className="mb-2"
                        >
                            <Card.Header>{obj.original_language.toUpperCase()}</Card.Header>
                            <Card.Body>
                                <Card.Title>{obj.title}</Card.Title>
                                <Card.Text>
                                    {obj.overview}

                                    <hr/> 

                                    Release date: {obj.release_date}<br/>
                                    <hr/> 
                                    Adult: {obj.adult?"Yes":"No"}<br/>
                                    <hr/> 
                                    Vote_average: {obj.vote_average}<br/>
                                    <hr/> 
                                    Vote_count: {obj.vote_count}
                                </Card.Text>
                            </Card.Body>
                        </Card><br/></>
                })}

                { this.state.type == 'tv' && resp_data && resp_data.length && resp_data.map((obj: any, idx) => {
                        return <><Card
                            bg='dark'
                            border="primary"
                            key={idx}
                            text='white'
                            style={{ width: '100%' }}
                            className="mb-2"
                        >
                            <Card.Header>{obj.original_language.toUpperCase()}</Card.Header>
                            <Card.Body>
                                <Card.Title>{obj.original_name}</Card.Title>
                                <Card.Text>
                                    {obj.overview}
                                    <hr/> 
                                    Release date: {obj.first_air_date}<br/>
                                    <hr/> 
                                    Vote_average: {obj.vote_average}<br/>
                                    <hr/> 
                                    Vote_count: {obj.vote_count}
                                </Card.Text>
                            </Card.Body>
                        </Card><br/></>
                })} 

                { this.state.type == 'person' && resp_data && resp_data.length && resp_data.map((obj: any, idx) => {
                        return <><Card
                            bg='dark'
                            border="primary"
                            key={idx}
                            text='white'
                            style={{ width: '100%' }}
                            className="mb-2"
                        >
                            <Card.Header>{obj.known_for_department.toUpperCase()}</Card.Header>
                            <Card.Body>
                                <Card.Title>{obj.name}</Card.Title>
                                <Card.Text>
                                    {obj.overview}
                                    <hr/> 
                                    Gender: {obj.gender == 2?"Male":"Female"}<br/>
                                    <hr/> 
                                    Adult: {obj.adult? "Yes":"No"}<br/>
                                    
                                </Card.Text>
                            </Card.Body>
                        </Card><br/></>
                })}    
            </div>
        );
    }
}
 
export default Trending;