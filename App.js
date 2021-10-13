import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Navegacion from "./src/navegacion/Navegacion";

const App = () => {
  return(
    <NavigationContainer>
      <Navegacion></Navegacion>
    </NavigationContainer>
  );
}

export default App;