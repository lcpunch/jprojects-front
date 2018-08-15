import React, { Component } from 'react';
import Sidebar from 'react-sidebar';
import Scopes from './Scopes';
import { Navbar } from 'reactstrap';

class NavigationBar extends Component {
  render() {
    const sidebar = <Scopes />;

    const sidebarProps = {
      sidebar,
      docked: true
    }

    return (
      <Sidebar {...sidebarProps}>
        <Navbar color="light" light expand="lg">
          <span className="navbar-brand">Jprojects</span>
        </Navbar>
      </Sidebar>
    );
  }
}

export default NavigationBar;
