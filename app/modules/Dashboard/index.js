import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Chart from './components/Chart';

@observer(["dashboardStore"])
export default class Dashboard extends Component {
// componentDidMount() {
// }

  render() {
    return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-8">
          <Chart store={this.props.dashboardStore} charttitle="1" notes="1" chartdata={this.props.dashboardStore.getData()} layout={this.props.dashboardStore.getLayout()} />/>
        </div>
        <div className="col-sm-4">
          <Chart store={this.props.dashboardStore} charttitle="1" notes="1" chartdata={this.props.dashboardStore.getData()} layout={this.props.dashboardStore.getLayout()} />/>
        </div>
      </div>
    </div>
    );
  }
}

export store from './store';
