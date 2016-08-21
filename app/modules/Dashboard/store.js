import {action} from "mobx";

class DashBoardStore {

  @action getData = () => {
    var trace1 = {
      x: [1, 2, 3, 4],
      y: [10, 15, 13, 17],
      type: 'scatter'
    };

    var trace2 = {
      x: [1, 2, 3, 4],
      y: [16, 5, 11, 9],
      type: 'scatter'
    };
    return [trace1, trace2];
  }

  @action getLayout = () => {
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
}
let store = new DashBoardStore;

export default store;
