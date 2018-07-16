import React, { Component } from 'react';
import './Form.css'
import Stats from './Stats.js';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.getQuery(this.state.value);
  }

  render() {
    return (
      <div>
        <div className="Form">
          Name of Batsman:<input type="text" name="name" value={this.state.value} onChange={this.handleChange}/>
          <button onClick = {this.handleSubmit}>Show Stats</button>
        </div>
        <div className="Stats">
          <Stats data={this.props.data}/>
        </div>
      </div>
    );
  }
}

export default Form;