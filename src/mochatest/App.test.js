import React from 'react';
import { configure, shallow, render} from 'enzyme';
import chai, { expect } from 'chai';
import App from '../App';
import chaiEnzyme from 'chai-enzyme';

import Adapter from 'enzyme-adapter-react-16';
import Navbar from "../components/navbar.component";
import TracksList from "../components/track-list.component";
import EditTrack from "../components/edit-track.component";
import CreateTrack from "../components/create-track.component";
import CreateContract from "../components/create-contract.component";
import {BrowserRouter as Router, Route} from "react-router-dom";

configure({ adapter: new Adapter() });

describe('App Component testing', function() {
  it('App renders routing navbar', () => {
    const wrapper = shallow(<App />);
    const routerNavbar = <Router>
      <div className="container">
        <Navbar/>
        <br/>

        {/* Here are the routes which are not linked to the NAVBAR !!! */}
        <Route path="/" exact component={TracksList} />
        <Route path="/edit/:id" exact component={EditTrack} />
        <Route path="/create" exact component={CreateTrack} />
        <Route path="/contract" exact component={CreateContract} />

      </div>
    </Router>

    expect(wrapper).to.contain(routerNavbar);
  });

  chai.use(chaiEnzyme());
})