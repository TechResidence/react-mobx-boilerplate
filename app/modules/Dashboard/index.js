import React, { Component } from 'react';
import { observer } from 'mobx-react';
import BoardView from './components/BoardView'
import ChartList from './stores/ChartList'
import Grid from './stores/Grid'

export default class Dashboard extends Component {
  render() {
    return (
      <BoardView chartList={ChartList} grid={Grid}/>
    );
  }
}

export store from './store';
