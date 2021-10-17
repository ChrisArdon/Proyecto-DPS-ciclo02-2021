
import React, {Component} from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import {Router, Scene} from 'react-native-router-flux'
/**
 * Componentes para rutas
 */

import Pantalladecarga from "./src/pantallas/Pantalladecarga";
import PantallaAuth from "./src/pantallas/PantallaAuth";
import Navegacion from "./src/navegacion/Navegacion";
import react from "react";

class App extends Component {
  render() {
      return (
        
      <Router>
        <Scene key="root">
          <Scene key="cargando" component={Pantalladecarga} initial={true} hideNavBar>  </Scene>
          <Scene key="auth" component={PantallaAuth} hideNavBar={true}> </Scene>
          </Scene>
          </Router>
          
          );
      }
      
  }
// const App = () => {
//   return(
//     <NavigationContainer>
//       <Navegacion></Navegacion>
//     </NavigationContainer>
//   );
// }

export default App;
