import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  Environment,
   asset
} from 'react-360';
import RapaPanel from './Panels/RapaPanel'
import SaintKostkaPanelWithStore from './Panels/SaintKostkaPanel'
import Panels from './panels'

import Actions from './actions/actions';
import Rstore from './stores/store';
import connectToStores from './connectToStores';
import alt from './alt';


const storeConnector = {
  Rstore(Store) {
    return {
      displayRapaPanel: Store.getDisplayRapaPanelState(),
      displaySaintKostkaPanel: Store.getDisplaySaintKostkaPanelState(),

    };
  },
};

class RapaKiwi extends React.Component {

  componentDidMount(){
    Environment.setBackgroundImage(asset('rapa_kiwi.jpg'), { format: '2D' });

  }
  
  render() {
console.log(!this.props.displayRapaPanel)
    return (
      <View style={styles.panel} >
        <VrButton style={styles.buttonRapa} onClick={()=>Actions.changeDisplayRapaPanelState(true)} />
        <VrButton style={styles.buttonSaintKostka} onClick={()=>Actions.changeDisplaySaintKostkaPanelState(true)} disabled={this.props.displaySaintKostkaPanel} />

      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
  //bottom:-200,
    width: 4096,
    height: 720,
    justifyContent: 'center',
    alignItems: 'center',
  },

  greeting: {
    fontSize: 30,
  },
  buttonRapa: {
    width: 260,
    height: 200,
    position: 'absolute',
    top: 220,
    left: 1850
  },
  buttonSaintKostka: {
    width: 100,
    height: 240,
    position: 'absolute',
    top: 90,
    left: 3900
  }
});

const RapaKiwiWithStore = connectToStores(RapaKiwi, [Rstore], storeConnector);
export default RapaKiwiWithStore;

AppRegistry.registerComponent('RapaKiwi', () => RapaKiwiWithStore);

//AppRegistry.registerComponent('SaintKostkaPanel', () => SaintKostkaPanelWithStore);
//AppRegistry.registerComponent('RapaPanel', () => RapaPanel);
AppRegistry.registerComponent('Panels', () => Panels);


