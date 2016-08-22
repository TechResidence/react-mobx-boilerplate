import { observe, autorun, computed, toJS } from 'mobx';
import React, {Component} from "react";
import { observer } from "mobx-react";
import styles from '../styles.css';

@observer
export default class ChartView extends Component {
  state = { plot: null }
  componentDidMount() {
    const Plotly = require('react-plotlyjs');
    let data = this.props.chart.data;
    let layout = this.props.chart.layout;
    this.setState({ plot: <Plotly data={toJS(data)} layout={layout} /> });
    autorun( () => {
      this.setState({ plot: <Plotly data={toJS(data)} layout={layout} /> });
    });
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
