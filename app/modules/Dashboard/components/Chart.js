import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

export default class Chart extends Component {
  render() {
    return (
    <div className="chart-wrapper">
      <div className="chart-title">
        Streaming Live Data Example
      </div>
      <div className="chart-stage">
        <div id="grid-1-1">
          <div id="graphDiv">a</div>
        </div>
      </div>
      <div className="chart-notes">
        Stream live data to charts
      </div>
    </div>
    )
  }
}
