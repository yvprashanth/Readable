import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";
import MainComponent from './components/MainComponent'
import Button from 'react-bootstrap/Button';
import { Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import Header from './Header'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Header />
      </BrowserRouter>
    );
  }
}

export default App;