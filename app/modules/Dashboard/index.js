import React, { Component } from 'react';
import { observer } from 'mobx-react';
// import Charts from './components/Charts'

@observer(["dashboardStore"])
export default class Dashboard extends Component {
  render() {
    <Charts store={this.props.dashboardStore} />
  }
}

export store from './store';
