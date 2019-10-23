import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import TrackList from "./components/track-list.component";
import EditTrack from "./components/edit-track.component";
import CreateTrack from "./components/create-track.component";
import CreateContract from "./components/create-contract.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar/>
        <br/>

        {/* Here are the routes which are <Link to=...> the NAVBAR !!! */}

        <Route path="/" exact component={TrackList} />
        <Route path="/edit/:id" exact component={EditTrack} />
        <Route path="/create" exact component={CreateTrack} />
        <Route path="/contract" exact component={CreateContract} />
      </div>
    </Router>
  );
}

export default App;
