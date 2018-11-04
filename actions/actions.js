import alt from '../alt';
import { asset, NativeModules } from 'react-360';

import _ from 'underscore';

const { SurfacesController } = NativeModules;


class Actions {
  constructor() {
    this.generateActions(
      'navigateToError',
    );
  }
  changeDisplayRapaPanelState(state) {
    return state;
  }
  changeDisplaySaintKostkaPanelState(state) {
    //SurfacesController.displayLocation(!state)
    return state;
  }

}

export default alt.createActions(Actions);
