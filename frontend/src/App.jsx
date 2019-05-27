import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Posts from './components/Posts';
import News from './components/News';
import Navbar from './components/CustomNavbar';
import { connect } from 'react-redux'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/posts" component={Posts} />
          <Route path="/news" component={News} />
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state){
  return { categories : state.categories }
}


export default connect(mapStateToProps)(App);
