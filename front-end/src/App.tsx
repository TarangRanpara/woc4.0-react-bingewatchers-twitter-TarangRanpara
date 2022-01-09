import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home'; 
import Trending from './pages/trending';
import SignIn from './pages/signin';
import SignUP from './pages/signup';
import {Row} from 'react-bootstrap';
import SignUp from './pages/signup';


type MyProps = {};

type MyState = {};


 
class App extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = {};
  }

  render() { 
    return ( 
      <BrowserRouter>
        <div>
              <NavBar/>
              <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/trending' element={<Trending/>} />
                    <Route path='/auth' element={<SignIn/>} />
                    <Route path='/signup' element={<SignUp/>} />
                </Routes>
              </div>
        </div>
      </BrowserRouter>
     );
  }
}

export default App;
