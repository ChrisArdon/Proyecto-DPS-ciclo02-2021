import React from "react";
import { View, Text, StyleSheet, Image, TouchableHighlight } from "react-native";
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function opcionesMenu({navigation}){
    return(
        <View style={styles.contenidoMenu}>
            <View style={styles.datosCuenta}>
                <Text>[imagen]</Text>
                <Text>[nombre]</Text>
            </View>

            <TouchableHighlight>
                <View style={styles.boton}>
                        <Image source={require('../../assets/img/icons/IconoSalir.png')} style={styles.icono} resizeMode='contain' />
                        <Text style={styles.textoBoton}>Cerrar sesión</Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => navigation.navigate("acercaDe")}>
                <View style={styles.boton}>
                        <Image source={require('../../assets/img/icons/IconoAcerca.png')} style={styles.icono} resizeMode='contain' />
                        <Text style={styles.textoBoton}>Acerca de</Text>
                </View>
            </TouchableHighlight>
        </View>
    )
}

function acercaDe({navigation}){
    return(
        <View style={styles.contenidoAcerca}>
            <TouchableHighlight onPress={() => navigation.navigate("opcionesMenu")}>
                <View style={styles.botonRegresarMenu}>
                    <Image source={require('../../assets/img/icons/IconoRegresar.png')} style={styles.iconoRegresar} resizeMode='contain' />
                    <Text style={styles.textoBotonRegresar}>Regresar a menú</Text>
                </View>
            </TouchableHighlight>

            <Image source={require('../../assets/img/logo.png')} style={styles.logo} />
            <Text style={styles.textoDescripcion}><Text style={{fontWeight: 'bold'}}>Tienda en línea</Text> es una aplicación creada con la intención de ayudar a pequeñas empresas a expandirse y tener una gestión de su negocio de forma factible. </Text>

            <View>
                <Text style={styles.titulo}>Desarrolladores</Text>
                <Text style={styles.texto}>Christian Ardon</Text>
                <Text style={styles.texto}>Giselle Chipagua</Text>
                <Text style={styles.texto}>Andrea Elías</Text>
                <Text style={styles.texto}>Julio Juarez</Text>
            </View>

            <Text style={styles.derechosReservados}>© Derechos reservados 2021</Text>
        </View>
    )
}

export default function Menu(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="opcionesMenu" component={opcionesMenu} 
                options={{
                    title: 'Menú',
                    headerShown: false
                }}
            />
            <Stack.Screen name="acercaDe" component={acercaDe} 
                options={{
                    title: 'Acerca de',
                    headerShown: false
                }}
            />
        </Stack.Navigator> 
    );
}

const styles = StyleSheet.create({
    contenidoMenu: {
        flex: 1,
        backgroundColor: '#A3A3A4'
    },

    datosCuenta: {
        alignSelf: 'center',
        marginVertical: 20
    },

    boton: {
        flexDirection: 'row',
        width: 250,
        height: 45,
        backgroundColor: '#000',
        marginVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 7,
        alignSelf: 'center'
    },

    textoBoton: {
        color: '#fff',
        marginHorizontal: 10,
        fontSize: 18,
        marginTop: 10
    },

    icono: {
        width: 25,
        height: 25,
        tintColor: '#E0E0E1',
        marginTop: 10
    },

    contenidoAcerca: {
        flex: 1,
        backgroundColor: '#E0E0E1',
        paddingHorizontal: 30
    },

    logo: {
        alignSelf: 'center',
        width: 150,
        height: 150,
        marginTop: 50,
        marginBottom: 20,
    },

    titulo: {
        marginTop: 55,
        marginBottom: 10,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000'
    },

    textoDescripcion: {
        fontSize: 18,
        textAlign: 'justify',
        color: '#000'
    },

    texto: {
        fontSize: 18,
        textAlign: 'center',
        color: '#000'
    },

    botonRegresarMenu: {
        flexDirection: 'row',
        backgroundColor: '#A3A3A4',
        borderRadius: 7,
        height: 40,
        marginTop: 15,
        width: 190
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

    derechosReservados: {
        marginTop: 90,
        textAlign: 'center'
    }
})