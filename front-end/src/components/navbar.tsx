import {Navbar, Nav, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';


type MyProps = {};

type MyState = {};

class NavBar extends Component<MyProps, MyState> {
    constructor(props: MyProps) {
        super(props);
        this.state = {};
    }

    render() { 
        return ( 
            <Navbar bg="primary" variant="dark" fixed="top" sticky="top">
                <Container>
                    <Navbar.Brand href="/">Binge Watcher's Twitter!</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/trending" className="nav-link">Trending</Link>
                    </Nav>
                    <Link to="/auth" className="nav-link" style={{color: "white"}}>Sign In</Link>
                </Container>
            </Navbar>
         );
    }
}
 
export default NavBar;