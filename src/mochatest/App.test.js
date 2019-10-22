import React from 'react';
import { configure, shallow, render} from 'enzyme';
import chai, { expect } from 'chai';
import App from '../App';
import chaiEnzyme from 'chai-enzyme';

import Adapter from 'enzyme-adapter-react-16';
import Navbar from "../components/navbar.component";
import ExercisesList from "../components/exercises-list.component";
import EditExercise from "../components/edit-exercise.component";
import CreateExercise from "../components/create-exercise.component";
import CreateUser from "../components/create-user.component";
import {BrowserRouter as Router, Route} from "react-router-dom";

configure({ adapter: new Adapter() });

describe('App Component testing', function() {
  it('App renders routing navbar', () => {
    const wrapper = shallow(<App />);
    const routerNavbar = <Router>
      <div className="container">
        <Navbar/>
        <br/>
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" exact component={EditExercise} />
        <Route path="/create" exact component={CreateExercise} />
        <Route path="/user" exact component={CreateUser} />
      </div>
    </Router>;

    expect(wrapper).to.contain(routerNavbar);
  });

  chai.use(chaiEnzyme());
})