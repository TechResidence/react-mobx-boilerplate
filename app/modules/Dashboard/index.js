import React, { Component } from 'react';
import { observer } from 'mobx-react';
import BoardView from './components/BoardView'
import ChartsView from './components/ChartsView'
import ChartList from './stores/ChartList'
import Grid from './stores/Grid'

export default class Dashboard extends Component {
  componentDidMount() {
    console.log("index");
    console.log(ChartList.charts);
  }
  render() {
    return (
      <div>
        index
        <ChartsView chartList={ChartList} grid={Grid}/>
      </div>
    );
  }
}

export store from './store';
