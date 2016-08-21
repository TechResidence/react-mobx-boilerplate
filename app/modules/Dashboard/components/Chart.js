import React, {Component} from "react";
import {observer} from "mobx-react";
import keenDashboardsStyles from '../keen-dashboards.css';

export default class Chart extends Component {
  componentDidMount() {
    Plotly.newPlot('graphDiv', this.props.store.getData(), this.props.store.getLayout());
  }

  render() {
    return (
    <div className={keenDashboardsStyles.chartWrapper}>
      <div className={keenDashboardsStyles.chartTitle}>
        Streaming Live Data Example
      </div>
      <div className={keenDashboardsStyles.chartStage}>
        <div id="grid-1-1">
          <div id="graphDiv"></div>
        </div>
      </div>
      <div className={keenDashboardsStyles.chartNotes}>
        Stream live data to charts
      </div>
    </div>
    )
  }
}
