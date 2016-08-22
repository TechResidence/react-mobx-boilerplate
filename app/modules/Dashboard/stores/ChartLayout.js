class ChartLayout {

  weather = {
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

  stockprice = {
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
let store = new ChartLayout;

export default store;
