import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './News.css';

export default class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name : 'Prashanth'
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt){
    debugger;
    this.setState({ name: evt.target.value.trim() });
  }

  render() {
    return (
      <div>
        <Grid>
          <h2>News</h2>
          <Row>
            <Col xs={12} sm={8} className="main-section">
              <form>
                <Row margin={true}>
                      <label>Comment ID:</label>
                      &nbsp; <br/>
                      <span className="input-text text-uuid">Name: </span>
                      &nbsp; 
                      <input name="id" value={this.state.name}  autofocus="autofocus" onChange={this.handleChange}/>
                      {this.state.name}
                </Row>
              </form>
            </Col>
            <Col xs={12} sm={4} className="sidebar-section">
              <Image src="assets/dog-people.jpg" />
              <p>I spend a lot of time walking around in the woods and talking to trees, and squirrels, and little rabbits and stuff. The secret to doing anything is believing that you can do it. Anything that you believe you can do strong enough, you can do. Anything. As long as you believe. Just go out and talk to a tree. Make friends with it. I guess that would be considered a UFO. A big cotton ball in the sky. Tree trunks grow however makes them happy. In nature, dead trees are just as normal as live trees.</p>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}