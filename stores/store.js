import alt from '../alt';
import Actions from '../actions/actions';

class Store {
  constructor() {
    this.state = {
        displayRapaPanelState: false,
        displaySaintKostkaPanelState: false
    };
    this.bindActions(Actions);
    this.exportPublicMethods({
        getDisplayRapaPanelState: this.getDisplayRapaPanelState,
        getDisplaySaintKostkaPanelState: this.getDisplaySaintKostkaPanelState,
    });
  }
  getDisplayRapaPanelState(){
      return this.state.displayRapaPanelState
  }
  onChangeDisplayRapaPanelState(state){
    this.setState({ displayRapaPanelState: state });
  }
  getDisplaySaintKostkaPanelState(){
    return this.state.displaySaintKostkaPanelState
}

onChangeDisplaySaintKostkaPanelState(state){
  console.log('store', this.state.displaySaintKostkaPanelState )
  this.setState({ displaySaintKostkaPanelState: state });
}
}
export default alt.createStore(Store, 'Rstore');
