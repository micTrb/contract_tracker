import React from 'react';
import { assert, expect } from 'chai';
import {Link} from "react-router-dom";
import {describe} from "mocha";


describe('Navbar', function() {
  it('Should render Navbar list', function() {
    let navbarTemplate = <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/" className="navbar-brand">ExcerTracker</Link>
      <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">Exercises</Link>
          </li>
          <li className="navbar-item">
            <Link to="/create" className="nav-link">Create Exercise</Link>
          </li>
          <li className="navbar-item">
            <Link to="/user" className="nav-link">Create User</Link>
          </li>
        </ul>
      </div>
    </nav>;

    expect.to.contain();
  })
})