import React from "react";
import { View, Text, StyleSheet, TouchableHighlight, ScrollView, Image } from "react-native";
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function listaCategorias({navigation}){
    return(
        <ScrollView>
            <View>
                <Text style={styles.titulo}>Categorías</Text>
            </View>

            <TouchableHighlight onPress={() => navigation.navigate("productosCategorias")}>
                <View style={styles.caja}>
                    <View style={styles.categoria}>
                        <Text style={styles.texto}>Frutas y Verduras</Text>
                    </View>
                </View>
            </TouchableHighlight>

            <TouchableHighlight>
                <View style={styles.caja}>
                    <View style={styles.categoria}>
                        <Text style={styles.texto}>Bebidas</Text>
                    </View>
                </View>
            </TouchableHighlight>

            <TouchableHighlight>
                <View style={styles.caja}>
                    <View style={styles.categoria}>
                        <Text style={styles.texto}>Dulces</Text>
                    </View>
                </View>
            </TouchableHighlight>
        </ScrollView>
    );
}

function productosCategorias({navigation}){
    return(
        <View>
            <TouchableHighlight onPress={() => navigation.navigate("listaCategorias")}>
                <View style={styles.botonRegresarMenu}>
                    <Image source={require('../../assets/img/icons/IconoRegresar.png')} style={styles.iconoRegresar} resizeMode='contain' />
                    <Text style={styles.textoBotonRegresar}>Regresar</Text>
                </View>
            </TouchableHighlight>

            <View>
                <Text style={styles.titulo}>Frutas y Verduras</Text>
            </View>

            <View style={styles.lista}>
                <View style={styles.itemLista}>
                        <View>
                            <Image source={require('../../assets/img/Strawberries.jpg')} style={styles.imagen}/>
                            <Text style={styles.textoProducto}>Producto: Fresas</Text>
                            <Text style={styles.textoProducto}>Precio U.: $1.00</Text>
                            <Text style={styles.textoProducto}>Marca: Frutas Frescas</Text>
                        </View>
                </View>
            </View>
        </View>
    );
}

export default function Categorias(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="listaCategorias" component={listaCategorias}
                options={{
                    title: 'Categorías',
                    headerShown: false
                }}
            />
            <Stack.Screen name="productosCategorias" component={productosCategorias}
                options={{
                    title: 'Productos',
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 25,
        marginLeft: 20,
        marginVertical: 15,
        color: '#000'
    },

    texto: {
        fontSize: 20,
        marginTop: 5,
        marginLeft: 20,
        color: '#000'
    },  

    caja: {
        backgroundColor: '#343A40',
        marginHorizontal: 12,
        marginVertical: 7,
        borderRadius: 7
    },

    lista: {
        flexBasis: '49%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    },

    textoProducto: {
        fontSize: 18,
        marginTop: 5,
        marginHorizontal: 10,
        color: '#000'
    },

    itemLista: {
        marginTop: 25
    },

    categoria: {
        height: 60,
        backgroundColor: '#E9ECEF',
        borderRadius: 5,
        margin: 5,
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10
    },

    botonRegresarMenu: {
        flexDirection: 'row',
        backgroundColor: '#A3A3A4',
        borderRadius: 7,
        height: 40,
        marginTop: 15,
        width: 130,
        marginHorizontal: 10
    },

    iconoRegresar: {
        width: 25,
        height: 25,
        tintColor: '#E0E0E1',
        marginTop: 5,
        marginLeft: 5
    },

    textoBotonRegresar: {
        marginTop: 5,
        color: '#fff',
        fontSize: 18,
        marginLeft: 5
    },

    imagen: {
        width: 120,
        height: 120,
        marginRight: 10
    }
})