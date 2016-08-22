import { observable, action } from 'mobx';

export default class ChartData {
  @observable data = [];
  path = '/api/chart/weather';
  interval = 1000;
  intervalObj;

  constructor() {
    this.data = [{
      x: [0, 2, 3, 4],
      y: [10, 15, 13, 17],
      type: "scatter"
    }, {
      x: [1, 2, 3, 4],
      y: [16, 5, 11, 9],
      type: "scatter"
    }];
    this.startTimer();
  }

  @action get = () => {
    return this.data;
  }
  @action update = () => {
    // this.requestData(this.path, this.data);
    this.data.push({
      x: [Math.random(), Math.random()],
      y: [Math.random(), Math.random()],
      type: "scatter"
    });
  }
  @action startTimer = () => {
    this.intervalObj = setInterval(action(() => { this.update(); }), this.interval);
  }
  @action stopTimer = () => {
    clearInterval(this.intervalObj);
  }

  requestData(path, targetStore) {
    fetch(path)
      .then(r => r.status !== 200 ?
        console.error(`Chart fetching error: ${r.status}`) :
        r.json()
      )
      .then(action(data => { targetStore = data; }))
      .catch(err => console.error(err));
  }

}
