import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class CreateTrack extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      version: '',
      artist: '',
      isrc_code: '',
      p_line: '',
      contractName: '',
      aliases: [],
      contracts: []
    }

    this.onChangeContractName = this.onChangeContractName.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeVersion = this.onChangeVersion.bind(this);
    this.onChangeArtist = this.onChangeArtist.bind(this);
    this.onChangeCode = this.onChangeCode.bind(this);
    this.onChangePLine = this.onChangePLine.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    axios.get('http://localhost:5000/contracts/')
      .then(response => {
        if(response.data.length > 0) {
          this.setState({
            contracts: response.data.map(contract => contract.contractName),
            contractName: response.data[0].contractName,
          })
        }
      })
  }

  componentDidMount() {}


  onChangeContractName(e) {
    this.setState({
      contractName: e.target.value
    })
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    })
  }

  onChangeVersion(e) {
    this.setState({
      version: e.target.value
    })
  }

  onChangeArtist(e) {
    this.setState({
      artist: e.target.value
    })
  }

  onChangeCode(e) {
    this.setState({
      isrc_code: e.target.value
    })
  }

  onChangePLine(e) {
    this.setState({
      p_line: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const track = {
      title: this.state.title,
      version: this.state.version,
      artist: this.state.artist,
      isrc_code: this.state.isrc_code,
      p_line: this.state.p_line,
      aliases: this.state.aliases,
      contractName: this.state.contractName
    }

    console.log(track);

    axios.post('http://localhost:5000/tracks/add', track)
      .then(res => console.log(res.data));

    window.location = "/";

  }


  render() {
    return(
      <div>
        <h3>Create New Track Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Contract name: </label>
            <select ref="userInput"
              required
              className="form-control"
              value={this.state.contractName}
              onChange={this.onChangeContractName}>
              {
                this.state.contracts.map(function(contract) {
                  return <option
                    key={contract}
                    value={contract}>{contract}
                  </option>;
                })
              }
            </select>
          </div>

          <div className="form-group">
            <label>Title: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}
            />
          </div>

          <div className="form-group">
            <label>Version: </label>
            <input type="text"
               required
               className="form-control"
               value={this.state.version}
               onChange={this.onChangeVersion}
            />
          </div>

          <div className="form-group">
            <label>Artist: </label>
            <input type="text"
               required
               className="form-control"
               value={this.state.artist}
               onChange={this.onChangeArtist}
            />
          </div>

          <div className="form-group">
            <label>ISRC: </label>
            <input type="text"
               required
               className="form-control"
               value={this.state.isrc_code}
               onChange={this.onChangeCode}
            />
          </div>

          <div className="form-group">
            <label>P Line: </label>
            <input type="text"
               required
               className="form-control"
               value={this.state.p_line}
               onChange={this.onChangePLine}
            />
          </div>


          <div className="form-group">
            <input type="submit" value="Create Track" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}