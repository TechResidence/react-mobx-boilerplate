import React, {Component} from "react";
import { observer } from "mobx-react";
import ReactGridLayout from 'react-grid-layout';
import ChartView from './ChartView';

@observer
export default class BoardView extends Component {
  render() {
    var gridLayout = this.props.grid.getGridLayout();
    var panels = this.props.panelList.panels;
    return (
      <ReactGridLayout className="layout" layout={gridLayout} cols={12} rowHeight={30} width={1200}>
        { panels.map( (panel, idx) =>
          <div key={panel["position"]}>
            <ChartView chart={panel["chart"]} />
          </div>
        )}
      </ReactGridLayout>
    )
  }
}
