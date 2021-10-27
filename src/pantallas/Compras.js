import React from "react";
import { View, Text, TouchableHighlight, StyleSheet, ScrollView, Image } from "react-native";
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function listaCompras({navigation}){
    return(
        <ScrollView style={styles.scrollview}>
            <TouchableHighlight onPress={() => navigation.navigate("compra")}>
                <View style={styles.itemCompra}>
                <Text style={styles.texto}>Mi Compra - 12/10/2021 08:00 am</Text>
                </View>
            </TouchableHighlight>
        </ScrollView>
    );
}

const eliminar = () => {

}

function compra(){
    return(
        <ScrollView>
            <Text style={styles.subtitulo}>Mi Compra - 12/10/2021 08:00 am</Text>
            
            <Text style={styles.subtitulo}>Total: $2.00</Text>

            <TouchableHighlight>
                <View style={styles.botonPago}>
                    <Text style={styles.botonPagoTexto}>Iniciar Pago</Text>
                </View>
            </TouchableHighlight>

            <View style={styles.lista}>
                <View style={styles.itemLista}>
                    <View style={styles.contenido}>
                        <View>
                            <Image source={require('../../assets/img/Strawberries.jpg')} style={styles.imagen}/>
                            <Text style={styles.texto}>Fresas</Text>
                            <Text style={styles.texto}>$1.00</Text>
                            <Text style={styles.texto}>Cantidad: 2</Text>
                        </View>

                        <View>
                            <TouchableHighlight onPress={eliminar}><Image source={require('../../assets/img/icons/IconoCerrar.png')} resizeMode='contain' style={styles.icono}/></TouchableHighlight>
                        </View>
                    </View>
                </View>
            </View>

            <TouchableHighlight>
                <View style={styles.botonEliminarCompra}>
                    <Text style={styles.botonEliminarCompraTexto}>Eliminar Compra</Text>
                </View>
            </TouchableHighlight>

        </ScrollView>
    );
}

export default function Compras() {

    return(
        <Stack.Navigator>
            <Stack.Screen name="listacompras" component={listaCompras} 
                options={{
                    title: 'Registro de compras',
                    headerStyle: {
                        backgroundColor: '#000'
                    },
                    headerTintColor: '#fff'
                }}
            />
            <Stack.Screen name="compra" component={compra} 
                options={{
                    title: 'Compra',
                    headerStyle: {
                        backgroundColor: '#000'
                    },
                    headerTintColor: '#fff'
                }}
            />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    subtitulo: {
        textAlign: 'center',
        fontSize: 20,
        color: '#000',
        marginTop: 10
    },

    texto: {
        fontSize: 18,
        marginTop: 5,
        marginHorizontal: 10,
        color: '#000'
    },

    textoContenido: {
        textAlign: 'center',
        fontSize: 15,
        color: '#000'
    },

    scrollview: {
        marginTop: 15
    },

    itemCompra: {
        height: 40,
        backgroundColor: '#FBBE73',
        borderRadius: 5,
        marginHorizontal: 15,
        marginVertical: 10
    },

    lista: {
        flexBasis: '49%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    },

    itemLista: {
        marginTop: 25
    },

    contenido: {
        flexDirection: 'row'
    },

    imagen: {
        width: 120,
        height: 120,
        marginRight: 10
    },

    icono: {
        width: 30,
        height: 30,
        tintColor: '#6C757D'
    },

    botonPago: {
        backgroundColor: '#E09F3E',
        height: 40,
        width: 190,
        borderRadius: 7,
        alignSelf: 'center',
        marginVertical: 15
    },

    botonPagoTexto: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 5
    },

    botonEliminarCompra: {
        backgroundColor: '#6C757D',
        height: 40,
        width: 190,
        borderRadius: 7,
        alignSelf: 'center',
        marginVertical: 60
    },

    botonEliminarCompraTexto: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 5
    }
})