import { observable, action } from "mobx";
import Chart from './Chart'

class PanelList {
  @observable panels;

  constructor(props) {
    this.panels = [
      {chart: Chart, position: "a"},
      {chart: Chart, position: "c"}
    ];
  }

}
let store = new PanelList;

export default store;
