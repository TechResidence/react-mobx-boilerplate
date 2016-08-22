import React, { Component } from 'react';
import { observer } from 'mobx-react';
import BoardView from './components/BoardView'
import PanelList from './stores/PanelList'
import Grid from './stores/Grid'

export default class Dashboard extends Component {
  render() {
    return (
      <BoardView panelList={PanelList} grid={Grid}/>
    );
  }
}

export store from './store';
