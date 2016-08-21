import React, {Component} from "react";
import {observer} from "mobx-react";
import Plotly from "react-plotlyjs"
import keenDashboardsStyles from '../keen-dashboards.css';

export default class Chart extends Component {
  // componentDidMount() {
  //   Plotly.newPlot(this.props.id, );
  // }

  render() {
    return (
    <div className={keenDashboardsStyles.chartWrapper}>
      <div className={keenDashboardsStyles.chartTitle}>
        {this.props.title}
      </div>
      <div className={keenDashboardsStyles.chartStage}>
        <Plotly data={this.props.store.getData()} layout={this.props.store.getLayout()} />
      </div>
      <div className={keenDashboardsStyles.chartNotes}>
        {this.props.notes}
      </div>
    </div>
    )
  }
}
