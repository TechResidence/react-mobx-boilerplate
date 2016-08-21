import React, {Component} from "react";
import {observer} from "mobx-react";

export default class Chart extends Component {
  render() {
    return (
    <div className="chart-wrapper">
      <div className="chart-title">
        Streaming Live Data Example
      </div>
      <div className="chart-stage">
        <div id="grid-1-1">
          <div id="graphDiv">{this.props.store.getData()}</div>
        </div>
      </div>
      <div className="chart-notes">
        Stream live data to charts
      </div>
    </div>
    )
  }
}
