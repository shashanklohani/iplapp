import React, { Component } from 'react';
import './StatsRow.css';
import { stat } from 'fs';

class StatsRow extends Component {
    constructor(props){
        super(props);
        }
        
    render() {
        
    return (
      <div className="StatsRow">
      <div>{this.props.head}</div><div>{this.props.val}</div>
      </div>
    );
}
}

export default StatsRow;