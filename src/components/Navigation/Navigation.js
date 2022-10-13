import { NavLink } from "react-router-dom";
import "./Navigation.css";

import React, { Component } from "react";

export default class Navigation extends Component {
  render() {
    return (
      <div className="nav">
        <NavLink to="/test-grid">Test Grid</NavLink>
        <NavLink to="/test-flex">Test Flex</NavLink>
        <NavLink to="/test-dropdown">Test Dropdown</NavLink>
      </div>
    );
  }
}
