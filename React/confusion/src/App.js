//import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap'
import Menu from './components/MenuComponent'

/*
function App() {  // Stateless react component
  */
class App extends Component {
  render() {
    /*const element = (
      <h1>Hello, World!!</h1>
    );
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {element}
          </a>
        </header>
      </div>
    );*/
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/"> 
              Ristorante Con Fusion
            </NavbarBrand>
          </div>
        </Navbar>
        <Menu /> 
      </div>
    );
  }
}


export default App;
