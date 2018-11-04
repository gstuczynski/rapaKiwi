import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  VrButton,
  asset,
  Animated
} from 'react-360';
import Entity from "Entity"
import _ from 'underscore'
import Rstore from '../stores/store';
import connectToStores from '../connectToStores';
import Actions from '../actions/actions';


const storeConnector = {
  Rstore(Store) {
    return {
      displaySaintKostkaPanel: Store.getDisplaySaintKostkaPanelState(),
    };
  },
};

const AnimatedEntity = Animated.createAnimatedComponent(Entity);

class SaintKostkaPanel extends React.Component {
  rotation = new Animated.Value(0);

  componentWillMount() {
      this.rotation.setValue(2);
      Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
  }

  render() {
    if(this.props.displaySaintKostkaPanel){
      this.rotation.setValue(2);
      Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
    }
    
    const displayed = this.props.displaySaintKostkaPanel ? {}:{display: "none"}
    const panelDefStyle = {
      width: 800,
      height: 400,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'grey',
      borderWidth: 2,
      position: 'absolute',
      transform: [{ translateZ: 550 }, { translateY: 200 }, { translateX: 16 }, {rotateY: 210} ]
    }
    const panelStyle = _.extend({}, panelDefStyle, displayed);
    console.log(panelStyle)
    //Animated.timing(this.rotation, {toValue: 5, duration: 1}).start();
    return (
      <View style={panelStyle}>
        <AnimatedEntity style={{transform: [{rotateY: this.rotation}, {translateX: -240},{scaleY: 40},{scaleX: 30},{translateY: -3.5} ]}} source={{ obj: asset('s_kostka.obj'), mtl: asset('s_kostka.mtl') }} />        
        <View>
          <Text style={{fontSize: 24, textAlign: 'center', marginLeft: 300,}} >Św. Stanisła Kostka</Text>
          <Text style={styles.content}>Stanisław pragnął wstąpić do zakonu jezuitów, ale nie uzyskał zezwolenia rodziców. W sierpniu 1567 roku, pieszo, w przebraniu, uciekł z Wiednia. W pogoń za nim ruszył jego brat Paweł. Stanisław dotarł do Dillingen w Bawarii (około 650 km) i zgłosił się do Piotra Kanizjusza. Ten wysłał go do Rzymu, gdzie Franciszek Borgiasz (Francisco de Borja y Aragón) przyjął go 28 października 1567 roku do nowicjatu. W wieku 17 lat złożył śluby zakonne. 10 sierpnia 1568 roku nagle zachorował na malarię i zmarł 15 sierpnia 1568 r. w Rzymie.</Text>

          <VrButton style={styles.close}  onClick={()=>Actions.changeDisplaySaintKostkaPanelState(false)}>
            <Image style={styles.close} source={asset('close-button.png')} />
        </VrButton>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({

  content: {
    fontSize: 18,
    marginLeft: 300,
  },

  close: {
    position: 'absolute',
    width: 50,
    height: 50,
    top: -40,
    right: 0,
  },
});

const SaintKostkaPanelWithStore = connectToStores(SaintKostkaPanel, [Rstore], storeConnector);
export default SaintKostkaPanelWithStore;