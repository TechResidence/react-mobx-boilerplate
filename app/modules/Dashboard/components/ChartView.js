import React, {Component} from "react";
import {observer} from "mobx-react";
import styles from '../styles.css';

export default class ChartView extends Component {
  state = { plot: null }
  componentDidMount() {
    const Plotly = require('react-plotlyjs');
    this.setState({ plot: <Plotly data={this.props.chart.data} layout={this.props.chart.layout} /> });
  }
  render() {
    return (
      <div className={styles.chartWrapper}>
        <div className={styles.chartTitle}>
          {this.props.chart.title}
        </div>
        <div className={styles.chartStage}>
          {this.state.plot}
        </div>
        <div className={styles.chartNotes}>
          {this.props.chart.notes}
        </div>
      </div>
    );
  }
}
