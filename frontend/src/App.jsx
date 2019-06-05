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
    console.log('Props', this.props)
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" render={() => <Home />} />
          <Route path="/posts" render={() => <Posts />} />
          <Route path="/news" render={() => <News />} />
        </div>
      </Router>
    );
  }
}

function mapStateToProps({categories}){
  return { categories : categories }
}


export default connect(mapStateToProps)(App);
