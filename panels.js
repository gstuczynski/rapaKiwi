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
import SaintKostkaPanel from './Panels/SaintKostkaPanel'

class Panels extends React.Component {  
  render() {

    return (
      <View style={{position: 'relative'}}>
        <SaintKostkaPanel />
        <RapaPanel />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 4096,
    height: 720,
    justifyContent: 'center',
    alignItems: 'center',
  },

  greeting: {
    fontSize: 30,
  },
  button: {
    width: 260,
    height: 200,
//    backgroundColor: "red",
    position: 'absolute',
    top: 370,
    left: 1850
  }
});

export default Panels;

AppRegistry.registerComponent('Panels', () => Panels);


