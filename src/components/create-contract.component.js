import React, { Component } from 'react';
import axios from 'axios';


export default class CreateContract extends Component {

  constructor(props) {
    super(props);

    this.state = {
      contractName: ''
    }

    this.onChangeContractName = this.onChangeContractName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeContractName(e) {
    this.setState({
      contractName: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const contract = {
      contractName: this.state.contractName,
    }

    console.log(contract);

    //sending data to backend
    axios.post('http://localhost:5000/contracts/add', contract)
      .then(res => console.log(res.data));

    this.setState({
      contractName: ''
    })

  }


  render() {
    return(
      <div>
        <h3>Create New Contract</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <input  type="text"
              required
              className="form-control"
              value={this.state.contractName}
              onChange={this.onChangeContractName}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Create contract" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}