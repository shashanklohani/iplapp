import React, { Component } from 'react';
import './Stats.css';
import StatsRow from './StatsRow.js'


class Stats extends Component {

  render() {
    return (
      <div className="Stats">
      <StatsRow head = {"Total Runs"} val={this.props.data[0].total_runs}/>
      <StatsRow head = {"Average"} val={this.props.data[0].total_runs/this.props.data[0].total_dismissal}/>
      </div>
    );
  }
}

export default Stats;