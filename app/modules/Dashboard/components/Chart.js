import React, {Component} from "react";
import {observer} from "mobx-react";
import styles from '../styles.css';

export default class Chart extends Component {
  state = { plot: null }
  componentDidMount() {
    const Plotly = require('react-plotlyjs');
    this.setState({ plot: <Plotly data={this.props.chartData} layout={this.props.chartLayout} /> });
  }
  render() {
    return (
      <div className={styles.chartWrapper}>
        <div className={styles.chartTitle}>
          {this.props.chartTitle}
        </div>
        <div className={styles.chartStage}>
          {this.state.plot}
        </div>
        <div className={styles.chartNotes}>
          {this.props.chartNotes}
        </div>
      </div>
    );
  }
}
