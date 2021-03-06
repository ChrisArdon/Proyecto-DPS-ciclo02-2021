import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, TouchableHighlight, ScrollView, Image } from "react-native";
import 'react-native-gesture-handler';
import firebase from "../../utils/firebase";
import 'firebase/firestore';

firebase.firestore().settings({experimentalForceLongPolling:true});


export default function Categorias(){
    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        firebase.firestore().collection('categorias').onSnapshot(querySnapShot => {
            const categorias = [];
            querySnapShot.docs.forEach(doc => {
                const {nombre} = doc.data();
                categorias.push({
                    id: doc.id,
                    nombre
                });
            })
            setCategorias(categorias)
        })
    })
    return(
        <ScrollView>
            <View>
                <Text style={styles.titulo}>Categorías</Text>
            </View>

            {
                categorias.map(categoria => {
                    return(
                        <View>
                            <View style={styles.caja}>
                                <View style={styles.categoria}>
                                    <Text style={styles.texto}>{categoria.nombre}</Text>
                                </View>
                            </View>
                        </View>         
                    )
                })
            }
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