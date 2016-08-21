import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Chart from './components/Chart';

@observer(["noteStore"])
export default class Notes extends Component {
  componentDidMount() {
    this.props.noteStore.getNotesFromServer();
  }
  
  render() {
    return (
      <Chart store={this.props.noteStore} />
    );
  }
}