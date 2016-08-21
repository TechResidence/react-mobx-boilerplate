import {action} from "mobx";

class DashBoardStore {
  
  @action getData = () => {
    return 100
  }
}
let store = new DashBoardStore;

export default store;