import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Chart from './components/Chart';

@observer(["dashboardStore"])
export default class Notes extends Component {
  
  render() {
    return (
      <Chart store={this.props.dashboardStore} />
    );
  }
}

export store from './store';