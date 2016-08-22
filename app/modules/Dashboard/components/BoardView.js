import React, {Component} from "react";
// import { observable, action } from 'mobx';
// import { observer } from "mobx-react";
import ReactGridLayout from 'react-grid-layout';
import ChartView from './ChartView';

export default class BoardView extends Component {
  render() {
    var gridLayout = this.props.grid.getGridLayout();
    var gridLayoutKey = ["a", "b", "c", "d", "e"]
    var charts = this.props.chartList.charts;
    return (
      <ReactGridLayout className="layout" layout={gridLayout} cols={12} rowHeight={30} width={1200}>
        { charts.map( (chart, idx) =>
          <div key={gridLayoutKey[idx]}>
            <ChartView chart={chart} />
          </div>
        )}
      </ReactGridLayout>
    )
  }
}
