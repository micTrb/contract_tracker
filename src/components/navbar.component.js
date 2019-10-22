import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Contracts and tracks </Link>

        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">Track list</Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">Create Track</Link>
            </li>
            <li className="navbar-item">
              <Link to="/contract" className="nav-link">Create Contract</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}