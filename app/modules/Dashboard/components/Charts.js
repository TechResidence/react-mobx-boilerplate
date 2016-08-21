import React, {Component} from "react";
import {observer} from "mobx-react";
import ReactGridLayout from 'react-grid-layout';
import Chart from './components/Chart';

export default class Chart extends Component {
  render() {
    var gridLayout = [
      {i: 'a', x: 0, y: 0, w: 4, h: 2, static: true},
      {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
      {i: 'c', x: 4, y: 0, w: 4, h: 2}
    ];

    return (
      <ReactGridLayout className="layout" layout={gridLayout} cols={12} rowHeight={30} width={1200}>
        <div key={'a'}>
          <Chart charttitle="1" notes="1" chartdata={this.props.store.getWeatherData()} layout={this.props.store.getWeatherLayout()} />
        </div>
        <div key={'b'}>
          <Chart charttitle="1" notes="1" chartdata={this.props.store.getWeatherData()} layout={this.props.store.getWeatherLayout()} />
        </div>
        <div key={'c'}>
          <Chart charttitle="1" notes="1" chartdata={this.props.store.getWeatherData()} layout={this.props.store.getWeatherLayout()} />
        </div>
      </ReactGridLayout>
    );
  }
}
