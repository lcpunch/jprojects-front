import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Navbar, ListGroup, ListGroupItem } from 'reactstrap';
import '../css/styles.css';

class Scopes extends Component {

  componentDidMount() {
    this.props.fetchScopes();
  }

  renderScopes() {
    return this.props.scopes.map(scope => {
      return (
        <ListGroupItem className="text-center">
          {scope}
        </ListGroupItem>
      );
    })
  }

  renderAddButton() {
    return (
      <ListGroupItem className="text-center">
        <a className="waves-effect waves-teal btn-flat">Add</a>
      </ListGroupItem>
    );
  }

  render() {
    return(
      <div>
        <Navbar color="light" light expand="lg">
          <span className="navbar-brand">Scopes</span>
        </Navbar>
        <div>
          <ListGroup>
            {this.renderAddButton()}
          </ListGroup>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    scopes: state.scopes
  }
}

export default connect(mapStateToProps, actions)(Scopes);
