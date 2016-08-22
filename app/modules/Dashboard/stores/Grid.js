class Grid {
  gridLayout = [
    {i: 'a', x: 0, y: 0, w: 4, h: 2, static: true},
    {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
    {i: 'c', x: 4, y: 0, w: 4, h: 2}
  ];

  getGridLayout() {
    console.log(this.gridLayout);
    return this.gridLayout;
  }
}

let store = new Grid;

export default store;
