import React, { Component } from 'react';
import { Alert, Button, Container, Form } from 'react-bootstrap';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

type MyProps = {};
type MyState = {};

class SignUp extends Component <MyProps, MyState>{
    constructor(props: MyProps) {
        super(props);
        this.state = {};
    }
    
    render() { 
        return ( 
            <div className="container">
                <br/>
                <Alert key={99} variant='primary'>
                    Sign Up. 
                </Alert>

                    

                    <Form style={{color: 'white'}}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>User name</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        it should be unique.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}
 
export default SignUp;