import React, { Component } from 'react';
import { Navbar, ListGroup, ListGroupItem } from 'reactstrap';
import '../css/styles.css';

class Scopes extends Component {

  render() {
    return(
      <div>
        <Navbar color="light" light expand="lg">
          <span className="navbar-brand">Scopes</span>
        </Navbar>
        <div>
          <ListGroup>
            <ListGroupItem className="text-center add-button">
              <i class="fa fa-plus" aria-hidden="true"></i>
            </ListGroupItem>
          </ListGroup>
        </div>
      </div>
    );
  }

}

export default Scopes;
