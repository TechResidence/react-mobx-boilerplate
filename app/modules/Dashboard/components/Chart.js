import React, {Component} from "react";
import {observer} from "mobx-react";
import styles from '../styles.css';
// import Plotly from 'react-plotlyjs';

export default class Chart extends Component {
  // componentDidMount() {
  //   const Plotly = require('react-plotlyjs');
  // }
          // <Plotly data={this.props.chartData} layout={this.props.chartLayout} />
  render() {
    return (
      <div className={styles.chartWrapper}>
        <div className={styles.chartTitle}>
          {this.props.chartTitle}
        </div>
        <div className={styles.chartStage}>
          aaabbbbbbbbbbbb
        </div>
        <div className={styles.chartNotes}>
          {this.props.chartNotes}
        </div>
      </div>
    );
  }
}
