import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import { render } from '@testing-library/react';
import 'bootstrap/dist/css/bootstrap.min.css';


//import component
import Home from './components/Home.js';
import Cuaca from './components/Cuaca.js';
import Gempa from './components/Gempa.js';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';
import Tsunami from './components/Tsunami.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";



function App() {
  //component: REUSABLE, bisa digunakan di berbagai modules
  return (
    <Router>
    <div className="App">
      <NavBar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cuaca" component={Cuaca} />
        <Route path="/gempa" component={Gempa} />
        <Route path="/tsunami" component={Tsunami} />
      </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
