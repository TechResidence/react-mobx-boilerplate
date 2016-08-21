import { observable, action } from "mobx";

class DashboardStore {
  @observable weather = [];
  @observable stockprice = [];

  @action getWeatherData = () => {
      this.getData('/api/chart/weather', this.weather);
      return this.weather;
  }
  @action getWeatherLayout = () => {
    return {
      title: 'Weather',
      xaxis: {
        title: 'Year',
        showgrid: false,
        zeroline: false
      },
      yaxis: {
        title: 'Percent',
        showline: false
      }
    };
  }
  @action getStockpriceData = () => {
      this.getData('/api/chart/stockprice', this.stockprice);
      return this.weather;
  }
  @action getStockpriceLayout = () => {
    return {
      title: 'Stockprice',
      xaxis: {
        title: 'Year',
        showgrid: false,
        zeroline: false
      },
      yaxis: {
        title: 'Percent',
        showline: false
      }
    };
  }
  getData(path, targetStore) {
    fetch(path)
    .then(r => r.status !== 200 ?
      console.error(`Chart fetching error: ${r.status}`) :
      r.json()
    )
    .then(action(data => { targetStore = data; }))
    .catch(err => console.error(err));
  }
}
let store = new DashboardStore;

export default store;
