import React, {Component} from "react";
import {observer} from "mobx-react";
import Plotly from "react-plotlyjs";
import keenDashboardsStyles from '../keen-dashboards.css';

export default class Chart extends Component {
  render() {
    return (
      <div className={keenDashboardsStyles.chartWrapper}>
        <div className={keenDashboardsStyles.chartTitle}>
          {this.props.chartTitle}
        </div>
        <div className={keenDashboardsStyles.chartStage}>
          <Plotly data={this.props.chartData} layout={this.props.chartLayout} />
        </div>
        <div className={keenDashboardsStyles.chartNotes}>
          {this.props.chartNotes}
        </div>
      </div>
    )
  }
}
