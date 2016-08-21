import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Chart from './components/Chart';

@observer(["dashboardStore"])
export default class Dashboard extends Component {

  render() {
    return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-8">
          <Chart store={this.props.dashboardStore} id="1"/>
        </div>
        <div className="col-sm-4">
          <Chart store={this.props.dashboardStore} id="2"/>
        </div>
      </div>
    </div>
    );
  }
}

export store from './store';
