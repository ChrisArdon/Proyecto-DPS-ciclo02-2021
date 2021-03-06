import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Productos from "../pantallas/Productos/Productos";
import Categorias from "../pantallas/Categorias/Categorias";
import Menu from "../pantallas/Menu/Menu";
import Compras from '../pantallas/Compras/Compras';

const Tab = createBottomTabNavigator();

export default function Navegacion(){
    return(
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#000'
                },
                tabBarActiveTintColor: '#F8F9FA',
                tabBarInactiveTintColor: '#6c757d'
            }}>
                <Tab.Screen name="productos" component={Productos} 
                    options={{
                        title:'Productos',
                        headerShown: false,
                        tabBarIcon: ({focused}) => (
                            <View>
                                <Image source={require("../../assets/img/icons/IconoProductos.png")} resizeMode="contain" 
                                    style={{
                                        ...styles.iconos,
                                        tintColor: focused ? "#F8F9FA" :"#6c757d"
                                        
                                    }}
                                />
                            </View>
                        )
                    }} 
                />
                <Tab.Screen name="categorias" component={Categorias} 
                    options={{
                        title:'Categorias',
                        headerShown: false,
                        tabBarIcon: ({focused}) => (
                            <View>
                                <Image source={require("../../assets/img/icons/IconoCategorias.png")} resizeMode="contain" 
                                    style={{
                                        ...styles.iconos,
                                        tintColor: focused ? "#F8F9FA" :"#6c757d"
                                    }}
                                />
                            </View>
                        )
                    }} 
                />
                <Tab.Screen name="compras" component={Compras} 
                    options={{
                        title:'Compras',
                        headerShown: false,
                        tabBarIcon: ({focused}) => (
                            <View>
                                <Image source={require("../../assets/img/icons/IconoCompras.png")} resizeMode="contain" 
                                    style={{
                                        ...styles.iconos,
                                        tintColor: focused ? "#F8F9FA" :"#6c757d"
                                    }}
                                />
                            </View>
                        )
                    }} 
                />
                <Tab.Screen name="menu" component={Menu} 
                    
                    options={{
                        title:'Men??',
                        headerShown: false,
                        tabBarIcon: ({focused}) => (
                            <View>
                                <Image source={require("../../assets/img/icons/IconoMenu.png")} resizeMode="contain"
                                    style={{
                                        ...styles.iconos,
                                        tintColor: focused ? "#F8F9FA" :"#6c757d"
                                    }}
                                />
                            </View>
                        )
                    }} 
                    
                />        
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    iconos: {
        width: 30,
        height: 30
    }
})