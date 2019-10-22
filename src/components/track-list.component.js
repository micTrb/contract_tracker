import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const Track = props => (
  <tr>
    <td>{props.track.title}</td>
    <td>{props.track.version}</td>
    <td>{props.track.artist}</td>
    <td>{props.track.isrc_code}</td>
    <td>{props.track.p_line}</td>
    <td>{props.track.aliases}</td>
    <td>{props.track.contractName}</td>

    <td>
      <Link to={"/edit/" + props.track._id }>edit</Link> | <a href="#" onClick={() => { props.deleteTrack(props.track._id) }}>delete</a>
    </td>
  </tr>
)


export default class TrackList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tracks: []
    }

    this.deleteTrack = this.deleteTrack.bind(this);
  }


  componentDidMount() {
    axios.get('http://localhost:5000/tracks/')
      .then(response => {
        this.setState({ tracks: response.data })
      })
      .catch(err => console.log("Error: " + err));
  }


  deleteTrack(id) {
    axios.delete('http://localhost:5000/tracks/'+id)
      .then(res => console.log(res.data));

    this.setState({
      tracks: this.state.tracks.filter(el => el._id !== id)
    })
  }

  trackList() {
    return this.state.tracks.map(currenttrack => {
      return <Track
        track={currenttrack}
        deleteTrack={this.deleteTrack}
        key={currenttrack._id} />
    })
  }

  render() {
    return(
      <div>
        <h3>Logged tracks</h3>
        <table className="table">
          <thead className="thead-light">
          <tr>
            <th>Title</th>
            <th>Version</th>
            <th>Artist</th>
            <th>ISRC</th>
            <th>PLine</th>
            <th>Aliases</th>
            <th>Contract</th>
          </tr>
          </thead>
          <tbody>
          { this.trackList() }
          </tbody>
        </table>
      </div>
    )
  }
}