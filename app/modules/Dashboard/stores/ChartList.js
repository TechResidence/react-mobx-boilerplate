import { observable, action } from "mobx";
import Chart from './Chart'

class ChartList {
  @observable charts;

  constructor(props) {
    this.charts = [Chart, Chart];
    console.log(Chart);
  }

}
let store = new ChartList;

export default store;
