import React, { Component } from 'react';
import './App.css';
import { encode } from './EncodeURI.js'

import Form from './Form.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [{"_id":"Search Player Name","total_runs": 0,"total_dismissal":0}] };
    this.getQuery = this.getQuery.bind(this);
    this.getResponse = this.getResponse.bind(this);
  }
  
  getQuery(name) {
    this.getResponse(name);
  }

  getResponse(name) {
    fetch("http://localhost:3005/api/deliveries/" + name)
      .then(response => response.json())
      .then(response => {
        this.setState({ data: response });
        console.log(this.state.data[0]);
      })
  }

  render() {
    return (
      <div className="App">
        <Form getQuery={this.getQuery} data={this.state.data}/>
      </div>
    );
  }
}

export default App;