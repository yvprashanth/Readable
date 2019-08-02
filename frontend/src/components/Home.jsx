import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';
import { fetchUsers } from '../actions'
import { connect } from 'react-redux'

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      buttonClicked : false
    }
  }

  fetchCategories = () => {
    this.setState({
      buttonClicked : true
    })
    this.props.myLocalFetchUsers();
  }

  render() {
    const { users } = this.props;
    return (
      <Grid>
        <Jumbotron>
        <h2>Welcome to Readable</h2>
          <p>This is how to build a website with React, React-Router, Redux & React-Bootstrap</p>
          <Link to="/posts">
            <Button bsStyle="primary">Learn More</Button>
          </Link>
          &nbsp;
          <Link to="/createpost">
            <Button bsStyle="primary">Create Post</Button>
          </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
              {
              (users.length > 0 && this.state.buttonClicked) ? 
                (<table>
                  <thead>
                    <tr>
                      <th>Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      users.map(user => 
                        <tr key={user.id}>
                          <td>{user.title}</td>
                        </tr>
                      )
                    }
                  </tbody>
                </table>) : <Link to="/posts">
              <Image src="assets/person-1.jpg" circle className="profile-pic"/>
              <h3>Frank</h3>
              <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
            </Link>
            }
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
          <Link to="/posts">
            <Image src="assets/person-2.jpg" circle className="profile-pic"/>
            <h3>Vanessa</h3>
            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
            </Link>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
          <Link to="/posts">
            <Image src="assets/person-3.jpg" circle className="profile-pic"/>
            <h3>Riff</h3>
            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
            </Link>
          </Col>
        </Row>
        <Button onClick={this.fetchCategories}>Fetch Categories</Button>
        </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return state.user
}

const mapDispatchToProps = (dispatch) => ({
    myLocalFetchUsers: () => dispatch(fetchUsers())
})

export default connect(mapStateToProps , mapDispatchToProps)(Home)