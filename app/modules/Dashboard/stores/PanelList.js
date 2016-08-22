import { observable, action } from "mobx";
import Chart from './Chart'
import ChartData from './ChartData'
import ChartLayout from './ChartLayout'

class PanelList {
  @observable panels;

  constructor(props) {
    let weatherChart = new Chart("weather", "weather", new ChartData(), ChartLayout.weather);
    let stockpriceChart = new Chart("stockprice", "stockprice", new ChartData(), ChartLayout.stockprice);
    this.panels = [
      {chart: weatherChart, position: "a"},
      {chart: stockpriceChart, position: "c"},
    ];
  }

}
let store = new PanelList;

export default store;
