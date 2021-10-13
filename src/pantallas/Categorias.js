import React from "react";
import { View, Text, Image, StyleSheet, TouchableHighlight, ScrollView, requireNativeComponent } from "react-native";

export default function Categorias(){
    return(
        <ScrollView>
            <View>
                <Text style={styles.titulo}>Categorías</Text>
            </View>

            
            <TouchableHighlight>
                <View style={styles.caja}>
                    <View style={styles.categoria}>
                        <Image source={require('../../assets/img/icons/IconoBebidas.png')} style={styles.icono} resizeMode='contain' />
                        <Text style={styles.texto}>Bebidas</Text>
                    </View>
                </View>
            </TouchableHighlight>

            <TouchableHighlight>
                <View style={styles.caja}>
                    <View style={styles.categoria}>
                        <Image source={require('../../assets/img/icons/IconoFrutasVegetales.png')} style={styles.icono} resizeMode='contain' />
                        <Text style={styles.texto}>Frutas y Verduras</Text>
                    </View>
                </View>
            </TouchableHighlight>

            <TouchableHighlight>
                <View style={styles.caja}>
                    <View style={styles.categoria}>
                        <Image source={require('../../assets/img/icons/IconoDulces.png')} style={styles.icono} resizeMode='contain' />
                        <Text style={styles.texto}>Dulces</Text>
                    </View>
                </View>
            </TouchableHighlight>
        </ScrollView>
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
        marginTop: 15,
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

    categoria: {
        height: 80,
        backgroundColor: '#E9ECEF',
        borderRadius: 5,
        margin: 5,
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10
    },

    icono: {
        width: 50,
        height: 50
    }
})