import { observable, action } from 'mobx';

export default class Chart {
  title;
  notes;
  data;
  layout;

  constructor(title, notes, chartData, layout) {
    this.title = title;
    this.notes = notes;
    this.data = chartData.data;
    this.layout = layout;
  }

}
