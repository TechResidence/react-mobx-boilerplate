import React, {Component} from "react";
// import { observable, action } from 'mobx';
// import { observer } from "mobx-react";
import ReactGridLayout from 'react-grid-layout';
// import ChartView from './ChartView';

      //   {charts.map(chart, idx =>
      //     <div key={gridLayout[idx][i]}>
      //       <ChartView chart={chart} />
      //     </div>
      //   )}

export default class Charts extends Component {
  render() {
    var gridLayout = this.props.grid.getGridLayout();
    // var charts = this.props.chartList.charts;
    // console.log(gridLayout);
    // console.log(charts);
    var a = ["aaa", "bbb", "ccc", "ddd"];
    var key = ["a", "b", "c", "d", "e"]
    let contents = "chartsView"
    return (
      <ReactGridLayout className="layout" layout={gridLayout} cols={12} rowHeight={30} width={1200}>
        { a.map( (elm, idx) =>
          <div key={key[idx]}>
            {elm}
          </div>
        )}
      </ReactGridLayout>
    )
  }
}
