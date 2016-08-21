import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer(["dashboardStore"])
export default class Dashboard extends Component {
  componentDidMount() {
  }

  render() {
    <Charts store={this.props.dashboardStore} />
  }
}

export store from './store';
