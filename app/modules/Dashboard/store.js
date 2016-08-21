import { observable, action } from "mobx";

class DashboardStore {
  @observable weather = [];

  @action getWeatherData = () => {
      this.getData('/api/chart/weather', this.weather);
      return this.weather;
  }
  @action getWeatherLayout = () => {
    return {
      title: 'Sales Growth',
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
