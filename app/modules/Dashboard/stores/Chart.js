import { observable, action } from 'mobx';

class Chart {
  @observable title;
  @observable notes;
  @observable data;
  @observable layout;

  constructor(props) {
    this.title = 'title';
    this.notes = 'notes';
    this.data = [{
      "x": [1, 2, 3, 4],
      "y": [10, 15, 13, 17],
      "type": "scatter"
    }, {
      "x": [1, 2, 3, 4],
      "y": [16, 5, 11, 9],
      "type": "scatter"
    }];
    this.layout = {
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

}

let store = new Chart;

export default store;
