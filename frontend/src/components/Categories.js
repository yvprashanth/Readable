import React from 'react'
import { loadCategories } from '../actions'
import { connect } from 'react-redux'
import { Nav, NavItem } from 'react-bootstrap';

class Categories extends Component { 
    componentWillMount(){

    }

    render(){
        <Nav bsStyle="pills">
            <NavItem eventKey={1}>All</NavItem>
        </Nav>
    }
}

function mapStateToProps(state){
    return { categories : state.categories }
}

function mapDispatchToProps(dispatch){
    return {
        getCategories: dispatch(loadCategories())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)