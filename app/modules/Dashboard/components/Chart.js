import React, {Component} from "react";
import {observer} from "mobx-react";

export default class Chart extends Component {
  componentDidMount() {
    Plotly.newPlot('graphDiv', this.props.store.getData(), this.props.store.getLayout());
  }

  render() {
    return (
    <div className="chart-wrapper">
      <div className="chart-title">
        Streaming Live Data Example
      </div>
      <div className="chart-stage">
        <div id="grid-1-1">
          <div id="graphDiv"></div>
        </div>
      </div>
      <div className="chart-notes">
        Stream live data to charts
      </div>
    </div>
    )
  }
}
