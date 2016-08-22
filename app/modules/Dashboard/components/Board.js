import React, {Component} from "react";
import { observable, action } from 'mobx';
import {observer} from "mobx-react";
import ReactGridLayout from 'react-grid-layout';
import GridStore from '../stores/Grid'
import Chart from './Chart';

export default class Board extends Component {
  @observable weather;
  @observable stockprice;

  componentDidMount() {
    this.weather = this.props.store.getWeatherData();
    this.stockprice = this.props.store.getStockpriceData();
  }
  render() {
    var gridLayout = GridStore.getGridLayout();
    return (
      <ReactGridLayout className="layout" layout={gridLayout} cols={12} rowHeight={30} width={1200}>
        <div key={'a'}>
          <Chart chartTitle="1" chartNotes="1" chartData={this.weather} chartLayout={this.props.store.getWeatherLayout()} />
        </div>
        <div key={'b'}>
          <Chart chartTitle="1" chartNotes="1" chartData={this.weather} chartLayout={this.props.store.getWeatherLayout()} />
        </div>
        <div key={'c'}>
          <Chart chartTitle="1" chartNotes="1" chartData={this.stockprice} chartLayout={this.props.store.getStockpriceLayout()} />
        </div>
      </ReactGridLayout>
    );
  }
}
