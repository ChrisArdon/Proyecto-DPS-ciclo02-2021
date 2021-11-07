
import React, {Component, useState, useEffect} from "react";
import { View, Text, StyleSheet, SafeAreaView, StatusBar, LogBox } from "react-native";


import {Router, Scene} from 'react-native-router-flux'
/**
 * Componentes para rutas
 */

import Pantalladecarga from "./src/pantallas/PantallaDeCarga/Pantalladecarga";
import PantallaAuth from "./src/pantallas/PantallaAuth/PantallaAuth";
import Navegacion from "./src/navegacion/Navegacion";
import Productos from "./src/pantallas/Productos/Productos";
import NavegacionPantalla from "./src/navegacion/NavegacionPantalla";

import auth2 from "./src/pantallas/auth2";



class App extends Component {
  render() {
      return (
        
        <Router>
          <Scene key="root">
            <Scene key="cargando" component={Pantalladecarga} initial={true} hideNavBar>  </Scene>
            <Scene key="auth2" component={auth2} hideNavBar={true}> </Scene>
            <Scene key="prods" component={Productos} hideNavBar={true}></Scene>
            <Scene key="NavP" component={NavegacionPantalla} hideNavBar={true}></Scene>
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
