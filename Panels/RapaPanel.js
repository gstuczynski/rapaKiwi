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
      displayRapaPanel: Store.getDisplayRapaPanelState(),
    };
  },
};

const AnimatedEntity = Animated.createAnimatedComponent(Entity);

class RapaPanel extends React.Component {
  rotation = new Animated.Value(0);

  componentWillMount() {
      this.rotation.setValue(2);
      Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
  }

  render() {
    this.rotation.setValue(2);
    Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
    console.log(this.props.displayRapaPanel)
    const displayed = this.props.displayRapaPanel ? {}:{display: "none"}
    const panelDefStyle = {
      width: 800,
      height: 400,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'grey',
      borderWidth: 2,
      transform: [{ translateZ: -600 }, { translateY: 250 }, { translateX: -400 }],
      position: "absolute",
      backgroundColor: "red"

    }
    const panelStyle = _.extend({}, panelDefStyle, displayed);
    console.log(panelStyle)
    //Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
    return (
      <View style={panelStyle}>
        <AnimatedEntity style={{transform: [{translateX: -240},{scaleY: 40},{scaleX: 30},{translateY: -2}, {translateZ: 40},{rotateY: this.rotation}]}} source={{ obj: asset('rapadone.obj'), mtl: asset('rapadone.mtl') }} />        
        <View>
          <Text style={styles.content}>Niewielka skałka (wysokość: 141cm, obwód: 495cm, waga 7t) zlokalizowana przy ul. Spółdzielców 5 w Krakowie. Od 30 stycznia 1997r. uznawana - obok Źródła Świętojańskiego - za jeden z dwóch krakowskich pomników przyrody nieożywionej. Jest unikatowa w południowej części Polski ze względu na duże rozmiary, litologię; ma szczególne znaczenie naukowe, dydaktyczne i estetyczne.
Rapa Kiwi to typowy głaz narzutowy (eratyk) zbudowany z granitu o tej samej nazwie (skały o niejasnej genezie z dużymi czerwonymi i różowymi kryształami skaleni potasowych poprzerastanych wrostkami kwarcu, hornblendy i biotytu) przyniesionego przez lądolód skandynawski ok. 400tys. lat temu z Wysp Alandzkich (Finlandia). Jego wiek określono na 1,5mld lat. Początkowo znajdował się w Dolinie Drwinki przy ul. Nowosądeckiej i przeznaczono go na tłuczeń drogowy, jednak dzięki staraniom ówczesnej SP nr 116 w 1995r. przetransportowano go w obecne miejsce.</Text>
        
<VrButton style={styles.close}  onClick={()=>Actions.changeDisplayRapaPanelState(false)}>
            <Image style={styles.close} source={asset('close-button.png')} />
        </VrButton>
        </View>

      </View>
    );
  }
};

const styles = StyleSheet.create({
  entity:{

    transform: [{scaleY: 5},{scaleX: 5}] 
  },
  panel: {
    // Fill the entire surface
    width: 800,
    height: 400,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'grey',
    borderWidth: 2,
    transform: [{ translateZ: -400 }, { translateY: 200 }, { translateX: -400 }],
    position:'relative',
    backgroundColor:'red'
  },
  content: {
    fontSize: 18,
    marginLeft: 300
  },
  button: {
    width: 260,
    height: 200,
    backgroundColor: "red",
    position: 'absolute',
    top: 0,
    left: 300
  },
  close: {
    position: 'absolute',
    width: 50,
    height: 50,
    top: -20,
    right: 0,
    //transform:[{translateZ: 0}]
    //zIndex: 100,
  },
});

const RapaPanelWithStore = connectToStores(RapaPanel, [Rstore], storeConnector);
export default RapaPanelWithStore;